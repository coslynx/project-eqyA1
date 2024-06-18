const playlist = {
  videos: [],
  currentVideoIndex: 0,
  isPlaying: false,
  
  addVideo: function(video) {
    this.videos.push(video);
  },
  
  removeVideo: function(index) {
    if (index >= 0 && index < this.videos.length) {
      this.videos.splice(index, 1);
      if (index < this.currentVideoIndex) {
        this.currentVideoIndex--;
      } else if (index === this.currentVideoIndex && this.isPlaying) {
        this.playNext();
      }
    }
  },
  
  play: function() {
    if (this.videos.length > 0) {
      this.isPlaying = true;
      console.log(`Playing: ${this.videos[this.currentVideoIndex]}`);
    } else {
      console.log("No videos in the playlist.");
    }
  },
  
  pause: function() {
    if (this.isPlaying) {
      this.isPlaying = false;
      console.log("Video paused.");
    } else {
      console.log("No video is currently playing.");
    }
  },
  
  playNext: function() {
    if (this.currentVideoIndex < this.videos.length - 1) {
      this.currentVideoIndex++;
      this.play();
    } else {
      console.log("End of playlist reached.");
    }
  },
  
  playPrevious: function() {
    if (this.currentVideoIndex > 0) {
      this.currentVideoIndex--;
      this.play();
    } else {
      console.log("Already at the beginning of the playlist.");
    }
  },
};

module.exports = playlist;