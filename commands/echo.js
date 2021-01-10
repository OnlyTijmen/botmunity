module.exports = {
    name: 'echo',
    description: "idk why",
    execute(message, args){


        var fullSentence = message.content.replace(`b!echo`, ' ')
        message.channel.send(`${fullSentence}`);


    }
}
 //b!love you know who will fit well together? Dave & Sara they will fit together amazingly
 //var sentence1 = b!love you know who will fit well together? Dave 
 //var sentence2 =  Sara they will fit together amazingly
 //var name1 = 