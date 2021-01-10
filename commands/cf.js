module.exports = {
    name: 'cf',
    description: "just a simple coinflip",
    execute(message, args){
    var yesno = Math.random();
    if (yesno <= 0.5){
        message.channel.send('heads')
    } else if (yesno >0.5){
        message.channel.send('tails')
    }
    
    }
}