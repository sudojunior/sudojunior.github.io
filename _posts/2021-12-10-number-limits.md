---
layout: post
title: Number limits
date: 2021-12-10 20:48:00 +0000
categories:
  - theory
  - mathematics
  - logic
excerpt_separator: <!--more-->
---
This post is incomplete, a revised post will unify my findings once I have time to do so.
<!--more-->

This post is directly tied to [`shuffle-theory`]({{ site.baseurl }}/projects/shuffle-theory) and its intentions to use ratio based role allocation in mafia games.

There are some complications I should have realized when using floating point numbers, and this refers to the [`IEEE 754`](https://en.wikipedia.org/wiki/IEEE_754) spec that all languages based on C use - meaning it can only cover up to 15 decimal places before the maths gets a little strange. While the code itself is theoretically correct, the runtime was not made to handle that kind of calculation - as shown below with this script (based on existing code from `shuffle-theory`, and some that wasn't published - yet or ever).

```js
import { getPlayers, getRoles, sumBy } from './common';
import { roles as defaultRoles } from './data';
import { logRoles } from './debug';

// iterate between 6 and 20 players
for (let i = 6; i <= 20; i++) {
  // generate roles
  const roles = getRoles(i, defaultRoles);
  const sum = defaultRoles.reduce((acc, cur) => acc + cur.ratio, 0);
  const scaleFactor = sum / roles.length;

  console.log(`players: ${i}, roles: ${roles.length}, scale: ${scaleFactor}`);
  logRoles(roles); // results in the fancy table with the header above it, comment out if you just want the numbers
}
```

This is the iteration outcome for 15 players, detailing the relation between the initial ratio and the number of roles requested for the given players. [In testing](https://gist.github.com/sudojunior/429b3309803593c80c55cabf25ec004d) JavaScript (through NodeJS); Python and C#, the following variations occur... *Each is determined by player count, then the difference between the former and the final role count.*

- JavaScript (NodeJS v17.2.0)
- Python (3.10.0)
- C# (.NET Core 5.0.11)
  > Type `decimal` can be exchanged for `double` or `float` with their respective unit conversion, the outcome will not change.

| Players | `.js` | `.py` | `.cs` | `.rs` |
| ------- | ----- | ----- | ----- | ----- |
| 0       | 0     | 0     | 0     | 0     |
| 1       | 0     | -1    | -1    | 0     |
| 2       | 0     | 0     | 0     | 0     |
| 3       | 0     | 0     | 0     | 0     |
| 4       | -1    | -1    | -1    | -1    |
| 5       | 2     | -1    | -1    | 2     |
| 6       | 1     | 1     | 1     | 1     |
| 7       | 1     | 1     | 1     | 1     |
| 8       | 0     | 0     | 0     | 0     |
| 9       | 1     | 0     | 0     | 1     |
| 10      | 0     | 0     | 0     | 0     |
| 11      | 0     | 0     | 0     | 0     |
| 12      | 0     | 0     | 0     | 0     |
| 13      | 0     | -1    | -1    | 0     |
| 14      | -1    | -1    | -1    | -1    |
| 15      | 2     | 1     | 1     | 2     |
| 16      | 1     | 1     | 1     | 1     |
| 17      | 1     | 0     | 0     | 1     |
| 18      | 0     | 0     | 0     | 0     |
| 19      | 1     | 1     | 1     | 1    |

To be entirely honest, I'm still not quite sure what is happening here... I'll update this post at some point if I figure out a solution that stays true to the original goal - the alternative being that a role configuration is predefined and then sliced based on how many players there are or create a Dictionary / Object / HashMap of arrays mapped to player counts. If you wish to track its progress, you can follow along with what I do at [shuffle-theory](https://github.com/TinkerStorm/shuffle-theory) on [TinkerStorm](https://github.com/TinkerStorm) - you'll find it does a daily run of role shuffling with the methods available (with this finding, it will soon do a matrix run to support testing different player counts).

Until then, see you around.