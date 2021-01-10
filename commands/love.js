module.exports = {
    name: 'love',
    description: "just... love",
     execute(message, args, Discord){
        var fullSentence = message.content.replace(`b!love`, '  ')

        var splitSentence = fullSentence.split('&')
        var splitSentence1 = splitSentence[0]
        var splitSentence2 = splitSentence[1]
        var name1 = splitSentence1
        var name2 = splitSentence2

        var percentage = Math.round(Math.random() * (100 - 0 + 1))

        if(message.content.includes('seggs')){
            var percentage = 69
        }
        if(message.content.includes('help')){
            message.channel.send('to use this command, try the following: `b!love *name1* & *name2*`')
        }if(message.content.includes('and')){
            message.reply('use a "&" instead of "and"')
        }if(message.content.includes('suicide')){
            message.reply('If you are serious, please consider visiting: https://suicidepreventionlifeline.org/ or something similar')
        }
            const embed = new Discord.MessageEmbed()

        .setTitle('LoveCalculator')
        .setThumbnail('https://whf.org.nz/wp-content/uploads/2019/09/heart-300x297.png')
        .setColor('#FF88FB')
        .setDescription('How much are these 2 in love?')
        .addFields(
            {name: `${name1}`,value:'\u200b', inline: true},
            {name: `${percentage}%`,value:"\u200b", inline: true},
            {name: `${name2}`, value:"\u200b", inline: true}
        )

        message.channel.send(embed)
        }


            
     
}