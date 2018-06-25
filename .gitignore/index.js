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
            if( message.author.id === '222802653778804746' ){ TargetUser.removeRole(Modo) }//id => Sayen-Alpha
            else{message.reply("Accès refusé")}
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
        //message.reply("Oui ?")
    }
   
    
    // ---------------------------------- Partie troll ----------------------------------//
    
    //Zenka
    var key_word1 = new RegExp("enka");var key_word2 = new RegExp("bisous sucrés");
    test = key_word1.test(message.content); var test2= key_word2.test(message.content)
    if(  (test && test2) && (message.author.username === 'Sαyen-∧lphα') ){
        message.channel.sendMessage("Oui elle kiffe les bisous sucrés ! Hein Zenka")
    }
    key_word1 = new RegExp("ui est le plus");key_word2 = new RegExp("gro");
    test = key_word1.test(message.content); var test2= key_word2.test(message.content)
    if(  test && test2 ){
        message.channel.sendMessage("Zenka bien sûr !")
    }
    key_word1 = new RegExp("crie");key_word2 = new RegExp("Zenka");
    test = key_word1.test(message.content); var test2= key_word2.test(message.content)
    if(  test && test2 ){
        message.channel.sendMessage("Voici le crie de Kenza : http://animaux-nature.com/telechargement/cochon_3.wav")
    }
    
    
    // Jonnhy Joestar
    key_word1 = new RegExp("ui est le plus débil");key_word2 = new RegExp("discord");
    test = key_word1.test(message.content);test2 = key_word2.test(message.content);
    if(  test  &&  test2 ){
        message.channel.sendMessage("C'est Jonnhy Joestar le plus débile de mon discord !!!")
    }
    
})
