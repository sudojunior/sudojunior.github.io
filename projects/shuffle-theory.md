---
layout: project
title: Shuffle Theory
date: 2021-10-24
description: Research into different shuffling theories and how they may effect a service as it scales across shards and clusters.
image: /assets/images/shuffle-theory-table.png
show_on_homepage: false
tags: [random, mafia-game, github, research]
links:
  - label: Repository
    href: https://github.com/TinkerStorm/shuffle-theory
  - label: Actions
    href: https://github.com/TinkerStorm/shuffle-theory/actions
---

> [Story Engine](story-engine) uses what I learned here to power it's branch narrative core.

The chance of a role being assigned to a player is determined by chance.shuffle. When a role's chance is calculated, it can be anywhere between `70%` and `130%` - for now they are scaled up as integers, but I am unsure on the effect it may have on the chance outcomes.

These chances are then sent through the randomizer to determine who would get the specific role on that iteration, which is repeated until all players have a role (also when no roles are left, but such a ratio allows an exact number to be distributed).

```ts
export function getRoles(count: number = Player.COUNT, roles: Role[] = defaultRoles): string[] {
  const sum = roles.reduce((sum, role) => sum + role.ratio, 0);
  // count / sum(roles.*.ratio)
  const scaleFactor = count / sum;

  return roles.map(role => {
    const roleCount = Math.round(role.ratio * scaleFactor);
    return Array(roleCount).fill(role.name);
  }).flat();
}
```

- The constant of `sum` is the total of all role ratios for a given run.
- The constant of `scaleFactor` determines how many of each role should be provided.
- The returned value is the set of roles to be used by the algorithm.

```ts
const chances: number[] = [/* (player chances) */];
const scaleFactor = sum(chances) / chances.length;
for (const i in chances)
  chances[i] /= scaleFactor;
// ensuring all chance values are scaled to equal that of 1
```

> This eventually turned into [scale-to (NPM)](https://npm.im/scale-to) ([GitHub](https://github.com/TinkerStorm/scale-to)).