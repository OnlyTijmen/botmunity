module.exports = {
    name: 'love1',
    description: "Find out how much you are in love",
    execute(message, args){
        const percentage = Math.round(Math.random() * (100 - 0 + 1))
        if (message.content.includes("tijmen")){
            message.channel.send('dont try and ship Tijmen, he wont find love anymore!')
       
        }else if (message.content.includes("Tijmen")){
            message.channel.send('dont try and ship Tijmen, he wont find love anymore!')
       
        }
        else if (message.channel.send(`you are ${percentage}% in love!`));

    }    

    
}
