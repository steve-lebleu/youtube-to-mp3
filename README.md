﻿# YouTube To MP3 Converter

Forked from [YouTube-To-MP3](https://github.com/The-D-Team/YouTube-To-MP3).

## Index

- [Overview](#overview)
- [Summary](#summary)
- [Disclaimer](#disclaimer)
- [Instructions](#instructions)

## Overview

⚡ A simple Node.JS YouTube to MP3 converter!

## Summary

💻 Users can use an IDE like IntelliJ to convert YouTube videos to mp3 files without having to rely on 3rd party websites.

## Instructions

1. Go to the [FFmpeg download page](https://ffmpeg.org/download.html).
2. Download the appropriate package for your operating system.
3. Extract the downloaded package to a location on your system.
4. Put the binaries where you want them to be.
5. Add the path to the binaries to your system PATH.
6. Go to terminal and type in `ffmpeg -version`, you should see something confirming the installation.
7. Download the [yt-dlp](https://github.com/yt-dlp/yt-dlp) executable.
8. Put the executable where you want it to be.
9. Add the path to the executable to your system PATH.
10. Go to terminal and type in `yt-dlp --version`, you should see something like a version number.
11. Install Node.js and NPM.
12. Run `npm install` to install the dependencies.

Open the *server.js* file in your favorite IDE.

Define the output path and format.

```javascript
const outputDir = 'downloads';
const outputFormat = 'mp3';
```

Copy / paste the YouTube music url's in the `downloads` array. Define the output file name in the `output` property.

```javascript
const downloads = [
  {
    url: 'https://www.youtube.com/watch?v=[VIDEO_ID]',
    output: 'So good'
  },
  {
    url: 'https://www.youtube.com/watch?v=[VIDEO_ID]',
    output: 'My awesome song'
  },
  ...
];
```

Run the script.

```bash
node server.js
```

Enjoy.

## Disclaimer

⚠ Only download music that you have permission to. Sources such as [NoCopyrightSounds](https://www.youtube.com/@NoCopyrightSounds), and Creative Commons sources are a few examples of places where you are allowed to use this.
