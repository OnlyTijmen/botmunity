module.exports = {
    name: 'love2',
    description: "just... love",
    execute(message, args, Discord){

        var name1 = 'Tijmen'
        var name2 = 'nonexistent';
        var percentage = Math.round(Math.random() * (100 - 0 + 1))
        const embed = new Discord.MessageEmbed()


        .setTitle('Love meter')
        .setThumbnail('https://whf.org.nz/wp-content/uploads/2019/09/heart-300x297.png')
        .setColor('#FF88FB')
        .setDescription('How much are these 2 in love?')
        .addFields(
            {name: `${name1}`,value:'\u200b', inline: true},
            {name: `${percentage}%`,value:"\u200b", inline: true},
            {name: `${name2}`, value:"\u200b", inline: true}
        )

        

            
        message.channel.send(embed);
    }
}