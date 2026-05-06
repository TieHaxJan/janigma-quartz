---
title: "Piped Redirect Extension"
description: "Redirect YouTube videos and Shorts to Piped while still using the YouTube recommendation algorithm"
date: 2026-05-06
tags: [Browser Extension, Piped, YouTube, Privacy, Open Source]
draft: false
---

## Redirecting YouTube Videos to Piped

I recently published my **Piped Redirect Extension** in both the [Chrome Web Store](https://chrome.google.com/webstore/detail/emocodejgchikhkgbjcegplgnoapgfgb) and [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/pipedredirectjanigma/). The extension makes it easier to open YouTube videos and Shorts through a configurable **Piped instance**, without completely giving up the YouTube browsing experience.

The idea came from a simple problem: I wanted to keep using the YouTube recommendation algorithm to discover videos, but I did not always want to watch them directly on YouTube. With Piped Redirect, I can still browse YouTube normally, use recommendations, search, channels, and links, but open the actual video playback through Piped.

## What is Piped?

**Piped** is an alternative frontend for YouTube. Instead of watching videos directly on YouTube, users can open them through a Piped instance such as `piped.video`.

This can offer a cleaner and more privacy-friendly viewing experience. Piped focuses on the video itself and avoids many of the distractions and tracking-heavy parts of the regular YouTube interface.

However, one downside of using alternative frontends is discovery. YouTube’s recommendation system is still very useful for finding new videos, following interests, and browsing related content. Completely leaving YouTube often means losing that convenience.

That is where **Piped Redirect** comes in.

## Why I Built This Extension

The goal of the extension is not to replace YouTube entirely. Instead, it creates a bridge between YouTube and Piped.

I still wanted to use YouTube for:

- discovering videos through recommendations,
- browsing creators and channels,
- using the familiar YouTube interface,
- opening links from search results, chats, websites, and social media.

But when it comes to actually watching a video, I wanted a quick way to open it in Piped.

Piped Redirect solves this by automatically detecting supported YouTube video and Shorts links and redirecting them to the configured Piped instance. This means I can keep the benefits of YouTube’s algorithm while using Piped for playback.

## How It Works

The extension supports three main ways to redirect videos:

- **Automatic redirection:** Supported YouTube videos and Shorts can be redirected automatically when opened.
- **Extension popup:** The current YouTube video can be opened in Piped directly from the popup.
- **Right-click context menu:** YouTube video links can be opened in Piped from the browser’s context menu.

The extension supports common YouTube hosts, including:

- `www.youtube.com`
- `youtube.com`
- `m.youtube.com`
- `music.youtube.com`
- `youtu.be`

It redirects regular YouTube video links and Shorts links, for example:

```text
https://www.youtube.com/watch?v=VIDEO_ID
https://youtube.com/watch?v=VIDEO_ID
https://m.youtube.com/watch?v=VIDEO_ID
https://music.youtube.com/watch?v=VIDEO_ID
https://youtu.be/VIDEO_ID
https://www.youtube.com/shorts/SHORT_ID
```

Unsupported pages such as the YouTube homepage, search results, channels, and playlists are not redirected automatically. This is intentional, because the extension is designed to preserve the normal YouTube browsing and discovery experience.

## Features

Piped Redirect includes the most important features I wanted for daily use:

* Redirect YouTube videos to a configurable Piped instance.
* Redirect YouTube Shorts to a configurable Piped instance.
* Open the current YouTube video in Piped from the extension popup.
* Choose whether videos open in the same tab or a new tab.
* Open supported YouTube links in Piped from the right-click menu.
* Configure a preferred Piped hostname.
* Enable or disable automatic redirection.
* Support both Chromium-based browsers and Firefox.

The default Piped instance is:

```text
piped.video
```

Users can change this in the settings and enter their preferred instance.

## Published on Chrome and Firefox

The extension is now available for both major browser extension ecosystems:

* **Chrome Web Store** for Chrome, Chromium, Opera, Brave, Edge, and other Chromium-based browsers.
* **Firefox Add-ons** for Firefox users.

This was an important step because I wanted the extension to be easy to install without requiring manual developer-mode installation. The repository still includes development builds and build instructions, but most users can now simply install it from their browser’s extension store.

## Privacy

Privacy was one of the main reasons for building this extension, so the extension itself is intentionally simple.

Piped Redirect only stores:

* the selected Piped hostname,
* the automatic redirection preference.

It does **not** collect, sell, transmit, or share personal data.

The extension only reads the active tab URL when needed, for example when the popup button is used to check whether the current page is a supported YouTube video or Shorts URL.

## Open Source and Manifest V3

The extension is open source and available under the **MIT License**.

It also uses **Manifest V3**, making it compatible with modern Chromium extension requirements. The repository contains builds for both Chromium-based browsers and Firefox, with a simple build process using Node.js.

## Looking Ahead

Piped Redirect is a small extension, but it solves a very specific problem: staying inside the YouTube recommendation flow while opening videos through Piped.

For me, this creates a better balance between convenience and privacy. I can still discover content using YouTube’s algorithm, but I am not forced to watch every video directly on YouTube.

There are still improvements planned, such as fixing the behavior when opening a YouTube video in the same window so that it redirects automatically. But the core idea already works: find videos on YouTube, watch them through Piped.

Publishing the extension in both the Chrome Web Store and Firefox Add-ons makes it much easier to use across browsers, and I hope it is useful for others who want the same workflow.