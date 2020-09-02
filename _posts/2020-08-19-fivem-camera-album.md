---
layout: post
title: "Extracting images from your FiveM phone camera (7)"
date: 2020-08-19 18:15:00 +0100
categories: fivem
---

> Specifically for windows (and linux subsystem if you want to use it), other operating systems may behave differently.

*This guide was written for those that may have been unable to use [gta5view](https://lmgtfy.com/?q=gta5view).*

1. Take a photo as you normally would... or many.
2. Close the game when you want to look at the photos.
3. Navigate to `%USERPROFILE%\Saved Games\CitizenFX\GTA5`.  
  *You can do this using Win+R, Cortana, Explorer address bar or a cmd prompt (WinCmd will accept `explorer.exe` with a direct path, Powershell will use `Invoke-Item` or `ii` with similar syntax).*
4. Copy or cut all files prefixed with `PGTA5...` into a another folder to make sure that the game remains unaffected.
5. Rename all copied files to have a `.jpg` extension. This can be done manually or using a command script.
  - WinCmd: `ren * *.jpg`
  - Powershell: `Get-ChildItem | Rename-Item -NewName { $_.name + ".jpg" }`  
    *replace Get-ChildItem with ls, no change except the alias used*
  - bash / shell: `mmv "*" "#1.jpg"`  
    *use `sudo apt install mmv` before running*

Thumbnails won't appear in regular explorer as they haven't been generated, Irfanview or Photos will do that just fine.

If you want, you can run it all at once using these commands in PowerShell:

```ps1
Copy-Item -Path "$($env:USERPROFILE)\Saved Games\CitizenFX\GTA5\PGTA*" -Destination $(Get-Location)
Get-ChildItem | Rename-Item -NewName { $_.name + ".jpg" }
```

This will take all files without an extension to where your terminal is currently open, replace `Copy-Item` with `Move-Item` if you don't want extra space on your hard drive.

> *The reason it's two is because I can't get powershell to accept the new destination as a unique filename...*

*If files aren't rendered as an image after doing this, use a tool like Irfanview to reformat the file(s) as .jpg. Basically overwrite and save the existing data.*

![FiveM Photo Album Copy]({{ site.baseurl }}/assets/images/fivem-album-result.png)