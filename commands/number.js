module.exports = {
    name: 'number',
    description: "gives a random number",
    execute(message, args){
        
  
         
    message.channel.send(Math.round(Math.random() * (100 - 0 + 1)));

        
      
    }
}