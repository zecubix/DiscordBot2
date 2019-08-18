const Discord = require('discord.js')
const bot = new Discord.Client();
const PREFIX = '%'

bot.on('message', function(message){
    
    if(message.content == 'Who is the Director?')
    {
        bot.channels.get("537020406217834507").send(message.author + ", Ryan977ftw is the Director of Medical Department!")
        };
    }
    );
    bot.on('message', function(message){
    
        if(message.content == 'Who is the Assistant Director?')
        {
            bot.channels.get("537020406217834507").send(message.author + ", Hxiuh is the Assistant Director of Medical Department!")
            };
        }
        );
        bot.on('message', function(message){
    
            if(message.content == 'Who is the Overseer?')
            {
                bot.channels.get("537020406217834507").send(message.author + ", O5-6(Hisheeps) is the Overseer of Medical Department")
                };
            }
            );
    

   bot.on('ready',function(){
       console.log("Ready");
   })

    client.login(process.env.token);
    
  
    
    
