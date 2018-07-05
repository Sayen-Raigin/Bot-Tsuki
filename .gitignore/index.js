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
            +"$$bot                                 => Info sur le bot"+'\n'+'\n'
            +"$$add-role @user                      => Ajoute le rôle modo"+'\n'+'\n'
            +"$$rm-role IDMembre NomDurole          => Supprime un rôle"+'\n'+'\n'
            +"----------------------------------------------------------------------"
        )
    }
    
    //Suppression de rôle
    var splitMessage = message.content.split(" ");
    //console.log(message.guild.member("428326394234273794"))
    if(splitMessage[0] === Prefix+'rm-role'){
        if(splitMessage.length === 3){
            var Role= message.guild.roles.find("name", splitMessage[2]) //Role
            var TargetUser = message.guild.member(splitMessage[1].toString()) //L'id user  
            //id => Sayen-Alpha
            if( message.author.id === '222802653778804746' ){ TargetUser.removeRole(Role.id) }
            else{message.reply("Accès refusé")}
        }
    }
    
    //Ajout du rôle modo
    var splitMessage = message.content.split(" ");
    if(splitMessage[0] === Prefix+'add-role'){
        if(splitMessage.length === 2){
            Modo=message.guild.roles.find("name","MODO")
            var TargetUser = message.guild.member(message.mentions.users.first())
            if( message.author.id === '222802653778804746' ){ TargetUser.addRole(Modo) }//id => Sayen-Alpha
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
    
    var key_word1 = new RegExp("tats");var key_word2 = new RegExp("enka");var key_word3 = new RegExp("enza");
    var test = key_word1.test(message.content); var test2= key_word2.test(message.content); var test3= key_word3.test(message.content)
    if(  (test && test2) || (test && test3) ){
        message.channel.sendMessage(
             '\n'+
            "-------------------------------Stats Kenza------------------------------"+'\n'+'\n'
            +"Prénom :      Kenza"+'\n'
            +"Apparition:   seconde génération"+'\n'
            +"Type :        Grosse patate"+'\n'
            +"Move :        Bug Bite"+'\n'
            +"Puissance :   60"+'\n'
            +"Précision :   100 %"+'\n'
            +"Description : Attaque l'adversaire en solidifiant sa queue. Gare à vos dernières"+'\n'
            +"Crie : http://animaux-nature.com/telechargement/cochon_3.wav"+'\n'
            +"----------------------------------------------------------------------"+'\n'+'\n'
       )
    }
    
    var key_word1 = new RegExp("kif"); var key_word2 = new RegExp("bisous sucrés");
    var test = key_word1.test(message.content); var test2= key_word2.test(message.content)
    if(  (test && test2) && (message.author.username === 'Sαyen-∧lphα') ){
        message.channel.sendMessage("Zenka kiffe les bisous sucrés ! Hein Zenka")
    }
    key_word1 = new RegExp("ui est");key_word2 = new RegExp("gro");
    test = key_word1.test(message.content); var test2= key_word2.test(message.content)
    if(  test && test2 ){
        message.channel.sendMessage("Zenka tu n'aurais pas pris du poids ce mois-ci ?")
    }
    key_word1 = new RegExp("crie");key_word2 = new RegExp("enka");
    test = key_word1.test(message.content); var test2= key_word2.test(message.content)
    if(  test && test2 ){
        message.channel.sendMessage("Voici le crie de Kenza :")
        message.channel.sendMessage("http://animaux-nature.com/telechargement/cochon_3.wav")
    }
    
    
    
    
    // Jonnhy Joestar
    key_word1 = new RegExp("ui est le plus débil");key_word2 = new RegExp("discord");
    test = key_word1.test(message.content);test2 = key_word2.test(message.content);
    if(  test  &&  test2 ){
        message.channel.sendMessage("C'est Jonnhy Joestar le plus débile de mon discord !!!")
    }
    
    
    
    //Sayen
    key_word1 = new RegExp("tats");key_word3 = new RegExp("Sayen-Alpha");
    test = key_word1.test(message.content); test2= key_word2.test(message.content); test3= key_word3.test(message.content)
    if(  (test && test2) || (test && test3) ){
        message.channel.sendMessage(
             '\n'+
            "-------------------------------Stats Sayen-----------------------------"+'\n'+'\n'
            +"Prénom :      Pedo"+'\n'
            +"Apparition:   inconnu génération"+'\n'
            +"Type :        Pedobear"+'\n'
            +"Move :        Pedo Move"+'\n'
            +"Puissance :   130"+'\n'
            +"Précision :   95 %"+'\n'
            +"Description : Pedo Pedo Pedo je Pedo en force"+'\n'
            +"Crie : http://animaux-nature.com/telechargement/cochon_3.wav"+'\n'
            +"Avatar : http://a403.idata.over-blog.com/5/05/03/27/Photos1/P--21-.jpg"+'\n'
            +"----------------------------------------------------------------------"+'\n'+'\n'
       )
    }
    
    //Hazi
    key_word1 = new RegExp("tats");key_word3 = new RegExp("Hazi");
    test = key_word1.test(message.content); test2= key_word2.test(message.content); test3= key_word3.test(message.content)
    if(  (test && test2) || (test && test3) ){
        message.channel.sendMessage(
             '\n'+
            "--------------------------------Stats Hazimuth--------------------------"+'\n'+'\n'
            +"Prénom :      Hazi Muet"+'\n'
            +"Apparition:   génération 2000"+'\n'
            +"Type :        Normal"+'\n'
            +"Move :        Suicide"+'\n'
            +"Puissance :   30"+'\n'
            +"Précision :   55 %"+'\n'
            +"Description : Please, tue-moi !"+'\n'
            +"Crie : http://pokemontrash.com/pokedex/images/cris/435.ogg"+'\n'
            +"Avatar : https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7M04eyebIVVHbsVn5YBLUXvoOagZdh2GJ14oBrD6T1DvgZro9"+'\n'
            +"----------------------------------------------------------------------"+'\n'+'\n'
       )
    }
    
})
