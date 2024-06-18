const axios = require('axios');

module.exports = {
    name: 'search',
    description: 'Search for specific types of lesbian porno',
    execute(message, args) {
        if (!args.length) {
            return message.channel.send('You need to provide a search term!');
        }

        const query = args.join(' ');

        axios.get(`https://api.lesbianporn.com/search?q=${query}`)
            .then(response => {
                const videos = response.data.videos;

                if (videos.length === 0) {
                    return message.channel.send('No videos found for that search term.');
                }

                // Display the search results to the user
                message.channel.send(`Search results for: ${query}`);
                videos.forEach(video => {
                    message.channel.send(`- ${video.title}: ${video.url}`);
                });
            })
            .catch(error => {
                console.error('Error searching for videos:', error);
                message.channel.send('An error occurred while searching for videos. Please try again later.');
            });
    },
};