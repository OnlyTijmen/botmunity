module.exports = {
    name: 'ship',
    description: "Find out how much you are in love",
    execute(message, args){
        const percentage = Math.round(Math.random() * (100 - 0 + 1))
        if (percentage <= 10){
            message.channel.send(`they are ${percentage}% in love with each other, dont even try to ship them, RIP our fallen brother`);
       
        }else if (percentage > 10 && percentage <=20){
            message.channel.send(`They are ${percentage}% in love, hmmm, maybe they are not meant to be together!`);
        }else if (percentage > 20 && percentage <=30){
            message.channel.send(`They are ${percentage}% in love, there is a chance, but a very slim one!`);
        }else if (percentage > 30 && percentage <=40){
            message.channel.send(`They are ${percentage}% in love, well, it could work out, but there is a long way to go!`);
        }else if (percentage > 40 && percentage <=50){
            message.channel.send(`They are ${percentage}% in love, they are slowly getting there, but maybe they need to consider someone else!`);
        }else if (percentage > 50 && percentage <=60){
            message.channel.send(`They are ${percentage}% in love, over half, but not very big, they should spend some more time together`);
        }else if (percentage > 60 && percentage <=70){
            message.channel.send(`They are ${percentage}% in love, oh, this is interesting, their chance is decently big!`);
        }else if (percentage > 70 && percentage <=80){
            message.channel.send(`They are ${percentage}% in love, wow... thats already a lot of love, do we have a potential couple here? Or will it end up being a couple of besties!`);
        }else if (percentage > 80 && percentage <=90){
            message.channel.send(`They are ${percentage}% in love, omg... This will be a great relationship! Cant wait to see the babies!`);
        }else if (percentage > 90 && percentage <=101){
            message.channel.send(`They are ${percentage}% in love, they fit together perfectly... So guys, when is the wedding?`);
        }
    
    }    

    
}

