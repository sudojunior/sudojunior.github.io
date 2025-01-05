---
layout: post
title: Powershell Theme Key
date: 2021-07-25 17:35:00 +0100
categories:
- powershell
excerpt_separator: <!--more-->
---

This is a direct follow up of [the post]({{ site.baseurl }}/2020/07/27/powershell-customization) I wrote on `oh-my-posh` and how I use it, but I will keep this short and only explain the necessary details.
<!--more-->

```ps1
$themePath = "~/Documents/WindowsPowershell/theme"

function Set-Theme {
  param (
    [string]$theme
  )

  if ($theme) { # save as theme on start up
    $theme | Out-File -FilePath $themePath
  } else { # or load it, ensure only one line is returned
    $theme = Get-Content -Path $themePath -TotalCount 1
  }

  if ($theme) {
    Set-PoshPrompt -Theme $theme
  }
}

#region Autocomplete
$themes = Get-ChildItem -Path ~\Documents\WindowsPowerShell\Modules\oh-my-posh\*\themes\*.*.json |
  Foreach-Object { $fragment = $_.BaseName.split("."); $fragment[-2..-($fragment.Count)] -join "." }

Register-ArgumentCompleter -CommandName Set-Theme -ParameterName theme -ScriptBlock {
  param($cmdName, $paramName, $word, $ast, $fakeBounds)
  $themes | Where-Object { $_ -like "$word*" }
}
#endregion
```

This replaces the method originally called `Set-Theme <theme>`, now embedded inside another command as `Set-PoshPrompt -Theme <theme>`.
It is recommended to call this in the terminal profile before it loads (it may error if a theme is invalid, not found).
It can also be called inside the terminal, which will update the current theme and the theme used for all new terminal sessions.
The `$themePath` variable is set to the userprofile home (`~`) by default, but can be modified to save elsewhere.

> *Do note, this method does not affect individual sessions - they will need to be restarted to see this change.*

---

## Word of warning with OneDrive

<img style="float: right;" src="{{ site.baseurl }}/assets/images/onedrive-permissions-issue.png"/>

*Specifically the Enterprise edition, Personal OneDrive (or SkyDrive as I've seen it named) did not have this problem as folder sync was disabled beforehand - but is likely to experience a similar conflict.*

If given the chance, OneDrive can and will backup any files it can from Desktop, Documents and Pictures (as well as any other folders you specify). Because this includes the theme file, it can be a problem for the user. It is likely best that you try to redirect the path target to the OneDrive folder - wherever that may be, otherwise the *somewhat* effective move would be to remove the app completely. However, I could not remove it's folder due to it being restricted... **by my own account**.
