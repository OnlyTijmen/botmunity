module.exports = {
    name: 'y/n',
    description: "the bot will answer yes or no",
    execute(message, args){
    var yesno = Math.random();
    if (yesno <= 0.5){
        message.channel.send('yes')
    } else if (yesno >0.5){
        message.channel.send('no')
    }
    
    }
}