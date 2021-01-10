module.exports = {
    name: '%',
    description: "gives you a random percentage",
    execute(message, args){
        
  
         
    message.channel.send(`${Math.round(Math.random() * (100 - 0 + 1))}%`);

        
      
    }
}