---
layout: project
title: Deception
archived: true
description: A Discord bot that allows users to play a variation of the game of mafia / werewolf in a text channel.
created: 2022-12-25
tags: [discord]
links:
  - label: Repository Prototype
    href: https://github.com/TinkerStorm/interaction-prototypes
  - label: Progress on Twitter
    href: https://twitter.com/i/events/1524808431013609473
---

This serves to be the culmination of several projects I have worked on and continue to work on. I had a wild idea to create this bot back in 2018, long before interactions were unveiled - which managed to get a community but ultimately failed to establish itself before it crashed and burned with Discord's policy changes. 2 years after it's demise, I had the idea to revive it under the name 'Deception' - a name that I had been using for a while to refer to the game itself - and embrace the interactions API as a way to create a more streamlined and interactive experience.

### Development Goals

> This list does not represent the current or final list of features, is subject to change and not guaranteed to be kept up to date with it's actual progress.

- Preset roster gamemodes (Mafia, Werewolf)
- Interchangeable channel hosts
  - In active channel - no lobby management, just run the game
  - In thread - lobby management, run within a channel as it's container
  - In channel - lobby management, run within a category with a dedicated channels for lobby management; logs; etc.

---

... this was, and still is, an ambitious project - I do not know why I thought it would be a good idea. I got the card games to understand how I should distribute the roles; and then need to figure out how each role behaves; how to start the game in a coroutine; how to... how to.