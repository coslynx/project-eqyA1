const fs = require('fs');
const path = require('path');
const axios = require('axios');
const ffmpeg = require('ffmpeg-static');

const videoProcessor = {
  processVideo: async (videoUrl, quality) => {
    try {
      const videoData = await axios.get(videoUrl, { responseType: 'stream' });
      const videoPath = path.join(__dirname, 'tempVideo.mp4');

      const writer = fs.createWriteStream(videoPath);
      videoData.data.pipe(writer);

      return new Promise((resolve, reject) => {
        writer.on('finish', () => {
          const ffmpegProcess = spawn(ffmpeg, ['-i', videoPath, '-vf', `scale=${quality}`, '-c:a', 'copy', 'output.mp4']);

          ffmpegProcess.on('exit', (code) => {
            if (code === 0) {
              resolve('Video processed successfully');
            } else {
              reject('Video processing failed');
            }
          });
        });

        writer.on('error', (err) => {
          reject(err);
        });
      });
    } catch (error) {
      throw new Error('Error processing video');
    }
  }
};

module.exports = videoProcessor;