---
title: "Getting started to Windows Terminal"
date: "2020-02-17"
excerpt: "Configurando um ambiente de terminal moderno, produtivo e customizado com múltiplos perfis, atalhos, fontes e temas."
excerptEn: "Setting up a modern, productive developer terminal workflow with custom profiles, split panes, fonts, and themes."
tags: ["terminal-windows", "terminal", "shell", "cmd", "cmder"]
readingTime: "3 min read"
coverImage: "https://cdn-images-1.medium.com/max/1024/0*T1ppQIXX2eyTkoLa"
canonicalUrl: "https://medium.com/@gstvribs/getting-started-to-windows-terminal-8a7d48be5d32"
featured: false
---

![Photo by [Jose Figueroa](https://unsplash.com/@josefiguer_12?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)](https://cdn-images-1.medium.com/max/1024/0*T1ppQIXX2eyTkoLa)
*Photo by [Jose Figueroa](https://unsplash.com/@josefiguer_12?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)*

Following Scott Hanselman’s last blog post titled: [**It’s time for you to install Windows Terminal**](https://www.hanselman.com/blog/ItsTimeForYouToInstallWindowsTerminal.aspx), and after several weeks i just changed my main command line interpreter from [Cmder](https://cmder.net/) to [Windows Terminal](https://github.com/microsoft/terminal), and it just feels great! Here below, I will show a bunch of links that could help your setup.

Here are some cool features, that recently came to terminal:

- [Split Panes ](https://devblogs.microsoft.com/commandline/windows-terminal-preview-v0-7-release/)(Use cmd, powershell and wsl together in the same tab)
- [Reordering Tabs](https://devblogs.microsoft.com/commandline/windows-terminal-preview-v0-7-release/)
- [Command line arguments](https://devblogs.microsoft.com/commandline/windows-terminal-preview-v0-9-release/?WT.mc_id=-blog-scottha)
- [Configuration as code ](https://github.com/microsoft/terminal/blob/master/doc/user-docs/UsingJsonSettings.md)(You could change some settings and see live, how it looks)
- And the most **c̵o̵o̵l̵ **important one, [gifs in the background of terminal](https://www.hanselman.com/blog/AddingReactionGifsForYourBuildSystemAndTheWindowsTerminal.aspx)

You can download the terminal from [Windows Store](https://www.microsoft.com/en-us/p/windows-terminal-preview/9n0dx20hk701) and [Github Release Page](https://github.com/microsoft/terminal/releases?WT.mc_id=-blog-scottha)

The Windows Terminal configuration is based on json file, called profiles.json, similar to VSCode configuration file. Here are the the [documentation](https://github.com/microsoft/terminal/blob/master/doc/user-docs/index.md), but if you are more familiar with examples, you can look below my settings file.

**Note:** to the font family, i’m using Cascadia Code, a new font create by Microsoft that you can [download here](https://github.com/microsoft/cascadia-code/releases)

![Imagem do artigo](https://cdn-images-1.medium.com/max/1024/1*fVF2MxquGEiKwvRIWceTfw.png)

[https://medium.com/media/882c70296d66a870ac337d3786f20314/href](https://medium.com/media/882c70296d66a870ac337d3786f20314/href)If you’re looking for cool themes, you could search one from them at [TerminalSplash](https://terminalsplash.com/)

![Imagem do artigo](https://cdn-images-1.medium.com/max/1024/1*0xHEQ83HxdIBmToS8Ay3Cg.png)

But if you’re more familiar with iTerm themes, here are a [big number the them](https://github.com/mbadolato/iTerm2-Color-Schemes/tree/master/windowsterminal?WT.mc_id=-blog-scottha), but if you don’t know how that looks, [you could look here](https://iterm2colorschemes.com/)

![Imagem do artigo](https://cdn-images-1.medium.com/max/725/1*247tuLlpKLg8pECrWbHhJg.png)

Please share your thoughts with the new terminal here, what are you missing to migrate yet? Thanks!
