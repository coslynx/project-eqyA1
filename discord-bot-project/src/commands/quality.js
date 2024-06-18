const Discord = require('discord.js');
const { fetchLesbianPorno } = require('../../utils/api');

module.exports = {
  name: 'quality',
  description: 'Watch lesbian porno in different qualities',

  async execute(message, args) {
    if (!args.length) {
      return message.channel.send('Please specify the quality you want to watch the video in.');
    }

    const quality = args[0].toLowerCase();

    if (quality !== 'low' && quality !== 'medium' && quality !== 'high') {
      return message.channel.send('Invalid quality specified. Please choose between low, medium, or high.');
    }

    try {
      const video = await fetchLesbianPorno(quality);
      message.channel.send(`Now watching lesbian porno in ${quality} quality: ${video}`);
    } catch (error) {
      console.error('Error fetching lesbian porno:', error);
      message.channel.send('An error occurred while trying to fetch lesbian porno. Please try again later.');
    }
  },
};