

module.exports = {
    name: 'statsonlytijmen',
    description: "invite this bot to your own server",
    execute(message, args, Discord){
        const embed = new Discord.MessageEmbed()
        .setThumbnail('https://pbs.twimg.com/profile_images/1268144575350280192/HAGQSfr4_400x400.jpg')
        .setTitle('OnlyTijmen')
        .setColor ('#05E2F4')
        .setDescription('Here are the main stats of OnlyTijmen')
        .setURL('https://nl.namemc.com/profile/OnlyTijmen.2')
        .addFields(
            {name: 'level', value: '64'},
            {name: 'rank', value: 'Emerald'}
        )

        

            
        message.channel.send(embed);
    }
}