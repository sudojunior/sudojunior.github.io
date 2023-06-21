---
layout: project
title: Hack n' Slash
created: 2021-09-28
description: A slash commands bot using guild commands as a custom commands alternative.
image: /assets/images/hack-n-slash-capture.png
thumbnail: /assets/thumbnails/hack-n-slash-capture.png
tags: [typescript, discord, github, slash-create]
links:
  - label: Repository
    href: https://github.com/sudojunior/hack-n-slash
  - label: Service Invite
    href: https://discord.com/api/oauth2/authorize?client_id=891363778808152125&permissions=0&scope=bot%20applications.commands
  - label: Support (TinkerStorm)
    href: https://discord.gg/Bb3JQQG
---

A slash commands concept based on the feature announcements from Discord's API team for autocompletion arguments from Gus, updated slate UI from Voltana and an updated integrations dashboard from Mason. *(I'm aware that Desch had also released an update to how files were being handled in the client.)*

The service itself was built over a weekend (24th - 27th September) in collaboration with [Snazzah](https://snazzah.com) with their experience in slash commands and continued maintenance on [slash-create](https://slash-create.js.org/#/).

At the time of writing this, the service does not have any limits except those provided by the API, and makes use of [redis](https://redis.io/) as a storage for the registered commands; along with [Tempura](https://github.com/lukeed/tempura) providing the logical content flow (which is currently broken).

Future deployments may include any of the following features (with attributed links where appropriate):

- Command [Options (or Arguments)](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure) and [Subcommands](https://discord.com/developers/docs/interactions/application-commands#subcommands-and-subcommand-groups)
- [Message Components](https://discord.com/developers/docs/interactions/message-components)
- [Message Embeds](https://discord.com/developers/docs/resources/channel#embed-object)
- [Custom Blocks](https://github.com/lukeed/tempura/blob/master/docs/blocks.md)
- Cool downs / Rate-limiting