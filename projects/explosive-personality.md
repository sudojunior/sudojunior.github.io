---
layout: project
title: Explosive Personality
description: As if it wasn't hard enough to defend your factory.
tags: [factorio, lua, github, game-dev]
created: 2025-11-02
links:
  - label: Mod Portal
    href: https://mods.factorio.com/mods/explosive-personality
  - label: Repository
    href: https://github.com/sudojunior/explosive-personality
---

The rather technical explanation for why this mod exists, is to do with when a friend and I had different mod *intended* to fulfil the exact same function. The only problem with this particular mod, and another like it, is that they used `math.random()` either every tick. Contrary to those discoveries, their description stated it would occur every hour or so - but the mere use of random as frequent as possible meant you could experience that event much earlier than expected, and sometimes repeatedly. With multiple players, the frequency went up even more, and the selection of who it targeted became deterministic in odd ways.

So my own goal was to redesign it, using a countdown timer instead, which I intend to build on that.
