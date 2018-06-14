const Discord = require('discord.js');
const bot = new Discord.Client();
var Prefix= '$$';
bot.login(process.env.TOKEN);

bot.on('ready',function(){
    bot.user.setGame("Command : $$h (help)");
})
var PrefixGet='!';

bot.on('message', message => {
    
    // ---------------------------------- Partie commande ----------------------------------//
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
    
    var splitMessage = message.content.split(" ");
    if(splitMessage[0] === Prefix+'Remove-Role'){
        if(splitMessage.length === 2){
            Modo=message.guild.roles.find("name","MODO")
            var TargetUser = message.guild.member(message.mentions.users.first())
            TargetUser.removeRole(Modo)
        }
    }
    
    
    // ---------------------------------- Partie délire ----------------------------------//
    if(message.content === Prefix+'bot'){
        message.reply(
            "Je suis Tsuki :p "
            +'\n'+"mon premier discord est "+message.guild.name+", (^_^)"
        )
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
    
    
    
    // ---------------------------------- Partie troll ----------------------------------//
    
    var key_word1 = new RegExp("@Zenka#0373");var key_word2 = new RegExp("bisous sucrés");
    test = key_word1.test(message.content); var test2= key_word2.test(message.content)
    if(  (test && test2) && (message.author.username === 'Sαyen-∧lphα') ){
        message.channel.sendMessage("Oui elle est kiffe les bisous sucrés ! Hein Zenka")
    }
    
})
