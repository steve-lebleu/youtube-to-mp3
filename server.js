const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const ffmpeg = require('fluent-ffmpeg');

// Set the output directory and file name
const outputDir = 'Music';
const outputFormat = 'mp3';

// Set the downloads array
const downloads = [
  {
    url: 'https://www.youtube.com/watch?v=0e5zm20IEjA',
    output: 'The Blessed Madonna, Joy Anonymous, Danielle Ponder - Carry Me Higher'
  },
  {
    url: 'https://www.youtube.com/watch?v=0e5zm20IEjA',
    output: 'The Blessed Madonna, Joy Anonymous, Danielle Ponder - Carry Me Higher (Extended Mix)'
  }
];

downloads
  .forEach(download => {
    // Spawn yt-dlp
    const stream = spawn('C:\\Program Files\\YTDLP\\yt-dlp.exe', ['-f', 'bestaudio', '-o', '-', download.url], { stdio: ['ignore', 'pipe', 'ignore'] });

    // Pipe the audio stream to FFmpeg to convert to MP3 format
    ffmpeg(stream.stdout)
      .format(outputFormat)
      .on('start', (err) => {
        console.log(`Starting conversion for "${download.output}"`);
      })
      .on('end', () => {
        console.log(`Finished converting "${download.output}" to MP3 format.`);
      })
      .pipe(fs.createWriteStream(path.join(outputDir, `${download.output}.${outputFormat}`)))
      .on('error', (err) => {
        console.error(`An error occurred while saving the file "${download.output}":`, err.message);
      })
      .on('finish', () => {
        console.log('File saved successfully.');
      });
  });
