---
layout: post
title: "Powershell Customization (and some extras)"
date: 2020-07-27 20:55:00 +0100
categories: powershell terminal aesthetics
---
1. Navigate to `%USERPROFILE%\Documents\WindowsPowershell` *this can be run in Win+R* or use `ii $env:USERPROFILE\Documents\WindowsPowershell` in your powershell console.  
  *If the folder doesn't exist, navigate to the Documents folder on the user scope; create and open it.*
2. Create a file in the directory named `Microsoft.Powershell_profile.ps1`; open the context menu and edit.
3. Add the code below to the file.
  *`ii` is an alias for `Invoke-Item` which is able to act as if you were selecting a file or folder.*
```ps1
function Here {
    ii .
}
```
4. Relaunch powershell, run `Here`.

---

There are some other customizations available to powershell that were inspired by shell scripts.

One of them being 'posh-git' based on 'oh-my-posh'. The theme used below is `Agnoster`. *Please don't use `Material`, you'll need to reboot your terminal session to fix the symbols.*

I would recommend reading this gist about how to configure PowerShell for this modification: https://gist.github.com/jchandra74/5b0c94385175c7a8d1cb39bc5157365e

> Also, get Windows Terminal from MS Store... it allows for flow between each 'shell' (powershell, cmd, bash, etc.).
> *Just because it looks better from my perspective! 😎*
> https://aka.ms/terminal

![Agnoster in Windows Terminal]({{ site.baseurl }}/assets/agnoster-terminal.png)

### A list of fonts I recommend from powerline fonts

> [powerline/fonts](https://github.com/powerline/fonts)

*You should be fine so long as one of these names are shown in the font face display name. If it specifically says 'for Powerline', you should be fine. - They have also been left out of this list.*

- CaskaydiaCove
- DejaVu Sans Mono
- Droid Sans Mono
- IBM 3270