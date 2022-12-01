---
layout: project
title: Slash Counter
description: A Discord bot that gamifies the use of message components... on serverless architecture.
# image: /assets/images/slash-counter-capture.png
created: 2022-10-07
tags: [discord, github, serverless]
links:
  - label: Invite
    href: https://canary.discord.com/api/oauth2/authorize?client_id=1025693259223269406&permissions=0&scope=applications.commands
  - label: Repository
    href: https://github.com/TinkerStorm/slash-counter
---

Slash Counter is a Discord bot that utilizes a combination of slash commands, message components, encoded state data and serverless architecture to turn a simple counter into a game. It is designed to track when a user as used a component and if it is within the expiry time, it will increment the counter and reset the expiry time.

Both the initial project and the 'Who dares wins' gamemode were inspired by [Reddit's The Button](https://en.wikipedia.org/wiki/The_Button_(Reddit)). The purpose of this project is to demonstrate the use of message components and slash commands, and to showcase the use of serverless *and stateless* architecture.

## Future gamemodes

> If you lose in any gamemode, the message will lock out and you'll need to restart.

- [The Weakest Link (`weakest-link`) - Issue #6](https://github.com/TinkerStorm/slash-counter/issues/6) - Gain score and bank it.
- [Who dares wins (`play-dare` / `who-dares-wins`) - Issue #4](https://github.com/TinkerStorm/slash-counter/issues/4) - The lowest score wins.

## Future options

- [`permadeath` - Issue #5](https://github.com/TinkerStorm/slash-counter/issues/5) - If enabled, the game will lock out if you lose. *Currently default behaviour, if false - the game will reset on it's next cycle.*