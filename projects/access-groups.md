---
layout: project
title: Access Groups Action
description: A GitHub action to assist with access control.
links:
  - label: Repository
    href: https://github.com/sudojunior/access-groups
---

While [first interaction](https://github.com/marketplace/actions/first-interaction) is a great way to welcome new users in, it does what it says on the tin. Access Groups has been designed to be extensive and flexible based on the data it is provided.

### Supported groups

- `site admin`
- `repo owner` -> `site admin`
- `repo admin` -> `site admin`
- `repo maintainer` -> `repo admin`
- `repo triage` -> `repo maintainer`
- `repo observer` -> `repo triage`
- `bounty-hunter`
- `campus-expert`
- `developer-program-member`