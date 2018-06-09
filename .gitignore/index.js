const Discord = require('discord.js');
const bot = new Discord.Client();
var Prefix= '$$';
bot.login(process.env.TOKEN);

bot.on('ready',function(){
    bot.user.setGame("Command : $$h (help)");
})
var PrefixGet='!';

bot.on('message', message => {
    
    if((message.content === Prefix+'h')){
        message.author.sendMessage(
            '\n'+
            "----------------------------------------------------------------------"+'\n'+'\n'
            +"$$bot                 => Info sur le bot"+'\n'+'\n'
            +"$$Add-Role @user      => Ajoute le role modo"+'\n'+'\n'
            +"$$Remove-Role @user      => Supprime le role modo"+'\n'+'\n'
            +"----------------------------------------------------------------------"
        )
    }
    
    if(message.content === Prefix+'bot'){
        message.reply(
            "Je suis Tsuki :p "
            +'\n'+"mon premier discord est "+message.guild.name+", (^_^)"
        )
    }
    
    var splitMessage = message.content.split(" ");
    if(splitMessage[0] === Prefix+'Remove-Role'){
        if(splitMessage.length === 2){
            Modo=message.guild.roles.find("name","MODO")
            var TargetUser = message.guild.member(message.mentions.users.first())
            TargetUser.removeRole(Modo)
        }
    }
    
    
    
    var key_word = new RegExp("best opening");
    var test = key_word.test(message.content);
    if(test){
        message.channel.sendMessage("https://www.youtube.com/watch?v=uSfhsBMA2io&t=")
    }
    key_word = new RegExp("suki");
    test = key_word.test(message.content);
    if(test && message.author.username !== 'Tsuki-Bot'){
        message.reply("Oui ?")
    }
    
})
