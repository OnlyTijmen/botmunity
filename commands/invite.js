module.exports = {
    name: 'invite',
    description: "Invite this bot to your own server!",
    execute(message, args){
        message.channel.send('https://discord.com/oauth2/authorize?client_id=795756188159049768&scope=bot&permissions=8');


    }
}