const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const path = require('path');

// Set the video ID and output file name
const videoId = 'TW9d8vYrVFQ';
const outputDir = 'Music';
const outputFile = path.join(outputDir, 'ELEKTRONOMIA_SKYHIGH.mp3'); // Name the mp3 file whatever you want

// Get the audio stream using ytdl-core
const stream = ytdl(videoId, { filter: 'audioonly' });

// Pipe the audio stream to FFmpeg to convert to MP3 format
ffmpeg(stream)
    .toFormat('mp3')
    .on('error', (err) => {
        console.error('An error occurred:', err.message);
    })
    .on('end', () => {
        console.log('Finished converting to MP3 format.');
    })
    .pipe(fs.createWriteStream(outputFile))
    .on('error', (err) => {
        console.error('An error occurred while saving the file:', err.message);
    })
    .on('finish', () => {
        console.log('File saved successfully.');
    });