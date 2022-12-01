---
layout: post
title: Number accuracy
date: 2021-12-24 21:41:00 +0000
categories:
  - theory
  - mathematics
  - logic
excerpt_separator: <!--more-->
---
This post is incomplete, a revised post will unify my findings once I have time to do so.
<!--more-->


This post is a direct follow up of '[Number limits](./2021/12/10/number-limits)' covers the accuracy which C-derived compilers have.

While the intial outlook on this problem was rather hopeless considering it was 'part of the interpreter', some relief can be found when using the standard `Math` rounding methods in their varying capacity. For this set of data, I am using the same set of code snippets with the modified intention to use each method.

> For those wondering if this problem repeats in negative numbers... the short answer is yes.

![4 graphs comparing differences between languages]({{ '/assets/images/number-accuracy-graph.png' | relative_url }})

> It's blinding... I know, I'm sorry... 😢

| {i} | js  | py  | cs  | rs  |
| --- | --- | --- | --- | --- |
| -20 | 0   | 0   | 0   | 0   |
| -19 | 0   | -1  | -1  | -1  |
| -18 | 0   | 0   | 0   | 0   |
| -17 | 0   | 0   | 0   | -1  |
| -16 | -1  | -1  | -1  | -1  |
| -15 | 2   | -1  | -1  | -2  |
| -14 | 1   | 1   | 1   | 1   |
| -13 | 1   | 1   | 1   | 0   |
| -12 | 0   | 0   | 0   | 0   |
| -11 | 1   | 0   | 0   | 0   |
| -10 | 0   | 0   | 0   | 0   |
| -9  | 0   | 0   | 0   | -1  |
| -8  | 0   | 0   | 0   | 0   |
| -7  | 0   | -1  | -1  | -1  |
| -6  | -1  | -1  | -1  | -1  |
| -5  | 2   | 1   | 1   | -2  |
| -4  | 1   | 1   | 1   | 1   |
| -3  | 1   | 0   | 0   | 0   |
| -2  | 0   | 0   | 0   | 0   |
| -1  | 1   | 1   | 1   | 0   |
| 0   | 0   | 0   | 0   | 0   |
| 1   | 0   | -1  | -1  | 0   |
| 2   | 0   | 0   | 0   | 0   |
| 3   | 0   | 0   | 0   | 0   |
| 4   | -1  | -1  | -1  | -1  |
| 5   | 2   | -1  | -1  | 2   |
| 6   | 1   | 1   | 1   | 1   |
| 7   | 1   | 1   | 1   | 1   |
| 8   | 0   | 0   | 0   | 0   |
| 9   | 1   | 0   | 0   | 1   |
| 10  | 0   | 0   | 0   | 0   |
| 11  | 0   | 0   | 0   | 0   |
| 12  | 0   | 0   | 0   | 0   |
| 13  | 0   | -1  | -1  | 0   |
| 14  | -1  | -1  | -1  | -1  |
| 15  | 2   | 1   | 1   | 2   |
| 16  | 1   | 1   | 1   | 1   |
| 17  | 1   | 0   | 0   | 1   |
| 18  | 0   | 0   | 0   | 0   |
| 19  | 1   | 1   | 1   | 1   |
| 20  | 0   | 0   | 0   | 0   |
| 21  | 0   | -1  | -1  | 0   |
| 22  | 0   | 0   | 0   | 0   |
| 23  | 0   | 0   | 0   | 0   |
| 24  | -1  | -1  | -1  | -1  |
| 25  | 2   | -1  | -1  | 2   |
| 26  | 1   | 1   | 1   | 1   |
| 27  | 1   | 1   | 1   | 1   |
| 28  | 0   | 0   | 0   | 0   |
| 29  | 1   | 0   | 0   | 1   |
| 30  | 0   | 0   | 0   | 0   |
| 31  | 0   | 0   | 0   | 0   |
| 32  | 0   | 0   | 0   | 0   |
| 33  | 0   | -1  | -1  | 0   |
| 34  | -1  | -1  | -1  | -1  |
| 35  | 2   | 1   | 1   | 2   |
| 36  | 1   | 1   | 1   | 1   |
| 37  | 1   | 0   | 0   | 1   |
| 38  | 0   | 0   | 0   | 0   |
| 39  | 1   | 1   | 1   | 1   |
| 40  | 0   | 0   | 0   | 0   |

> Using `floor` or `ceil` in respective languages results in the same values being returned.

With that being said, Python and C# have identical iteration differences... and Rust is just as unreliable as JavaScript when it comes to negative numbers (with a very rare occurance where they cross paths). The solution (or workaround in this case) for needing `{x}` roles for equivelent quantity of players, use `ceil` and slice the array down, _so that you don't have to figure out what else needs to be added_.

## Shared Patterns

> Using whole numbers only.

| Digit | js | py | cs | rs |
| ----- | -- | -- | -- | -- |
| 0     | 0  | 0  | 0  | 0  |
| 1     | 0  | -1 | -1 | 0  |
| 2     | 0  | 0  | 0  | 0  |
| 3     | 0  | 0  | 0  | 0  |
| 4     | -1 | -1 | -1 | -1 |
| 5     | 2  | -1 | -1 | 2  |
| 6     | 1  | 1  | 1  | 1  |
| 7     | 1  | 1  | 1  | 1  |
| 8     | 0  | 0  | 0  | 0  |
| 9     | 1  | 0  | 0  | 1  |

[Spreadsheet used to render graphs](https://docs.google.com/spreadsheets/d/1F0Eg8dagJppxX4MMcIyV1GOvJDc4xGnZT0hNWYu29Zk/edit?usp=sharing)

> You can follow along with what I do on [TinkerStorm](https://github.com/TinkerStorm)'s [Discord](https://discord.gg/Bb3JQQG).

And with that... Merry Christmas / Happy Holidays to you _reader_ and a Happy New Year! 🎄 🎆