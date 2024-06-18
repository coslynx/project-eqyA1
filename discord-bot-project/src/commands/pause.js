const { MessageEmbed } = require('discord.js');
const { videoProcessor } = require('../../utils/videoProcessor');

module.exports = {
  name: 'pause',
  description: 'Pause the current video playback',
  execute(message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);

    if (!message.member.voice.channel) {
      return message.channel.send('You need to be in a voice channel to pause the music!');
    }

    if (!serverQueue) {
      return message.channel.send('There is no video playing that I could pause!');
    }

    if (serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause();
      const embed = new MessageEmbed()
        .setColor('#FF0000')
        .setDescription('⏸️ Video paused');
      return message.channel.send(embed);
    } else {
      return message.channel.send('The video is already paused!');
    }
  },
};