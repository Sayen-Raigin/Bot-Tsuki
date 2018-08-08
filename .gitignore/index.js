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
            +"$$bot                              => Info sur le bot"+'\n'+'\n'
            +"$$game                             => Liste les jeux disponibles"+'\n'+'\n'
            +"$$add-role IDMembre NomDurole      => Ajoute le rôle modo"+'\n'+'\n'
            +"$$rm-role IDMembre NomDurole       => Supprime un rôle"+'\n'+'\n'
            +"$$Rename-Name IDMembre NewName     => Change le pseudo d'un membre"+'\n'+'\n'
            +"----------------------------------------------------------------------"
        )
    }
    
    //Liste les jeux dispo
    if((message.content === Prefix+'game')){
        message.channel.sendMessage(
            '\n'+
            "----------------------------------------------------------------------"+'\n'+'\n'
            +"http://bombparty.sparklinlabs.com/"+'\n'
            +"http://www.extinction.fr/"+'\n'+'\n'
            +"----------------------------------------------------------------------"
        )
    }
    
    //Suppression d'un rôle
    var splitMessage = message.content.split(" ");
    if(splitMessage[0] === Prefix+'rm-role'){
        if(splitMessage.length === 3){
            var Role= message.guild.roles.find("name", splitMessage[2]) //Role
            var TargetUser = message.guild.member(splitMessage[1].toString())
            if( message.author.id === process.env.AuthorSetsu ){ TargetUser.removeRole(Role.id) }
            else{message.reply("Je t'aime ^^")}
        }
    }
    //Ajout d'un rôle
    var splitMessage = message.content.split(" ");
    if(splitMessage[0] === Prefix+'add-role'){
        if(splitMessage.length === 3){
            var Role= message.guild.roles.find("name", splitMessage[2]) //Role
            var TargetUser = message.guild.member(splitMessage[1].toString())
            if( message.author.id === process.env.AuthorSetsu ){ TargetUser.addRole(Role.id) }
            else{message.reply("Je t'aime ^^")}
        }
    }
    
    //Changement de pseudo
    var splitMessage = message.content.split(" ");
    if(splitMessage[0] === Prefix+'Rename-Name'){
        if(splitMessage.length >= 3 ){
            
            var splitMessage1 = splitMessage[1]
            var splitMessage3 = splitMessage
            delete splitMessage3[0]; delete splitMessage3[1];
            //Debug console.log( test1 )
            var i = 0, strLength = splitMessage3.length; 
            for(i; i < strLength; i++) {
                splitMessage3 = splitMessage3.toString().replace(',',' ')
            }
            splitMessage3 = splitMessage3.replace(' ','');splitMessage3 = splitMessage3.replace(' ','')
            
            if(splitMessage1.length === 18){ message.guild.members.get(splitMessage1).setNickname(splitMessage3) }else{message.reply("L'ID dépasse 18 char")};
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
    
    var key_word1 = new RegExp("tats");var key_word2 = new RegExp("enka");var key_word3 = new RegExp("enka");
    var test = key_word1.test(message.content); var test2= key_word2.test(message.content); var test3= key_word3.test(message.content)
    if(  (test && test2) || (test && test3) ){
        message.channel.sendMessage(
             '\n'+
            "-------------------------------Stats Kenza------------------------------"+'\n'+'\n'
            +"Prénom :      Kenza"+'\n'
            +"Apparition:   seconde génération"+'\n'
            +"Type :        Feu"+'\n'
            +"Move :        Pyro Cataclysmique"+'\n'
            +"Puissance :   125"+'\n'
            +"Précision :   100 %"+'\n'
            +"Description : Mage de Feu, brûle tout ce qui bouge. Kenza est là bye les cochons.."+'\n'
            +"Crie : http://dinosoria.com/sons/effets/boom.mp3"+'\n'
            +"Avatar : https://ih0.redbubble.net/image.310021722.0497/flat,550x550,075,f.jpg"+'\n'
       )
    }
    
    var key_word1 = new RegExp("enka"); var key_word2 = new RegExp("bisou");
    var test = key_word1.test(message.content); var test2= key_word2.test(message.content)
    if(  (test && test2) && (message.author.username === 'Sαyen-∧lphα') ){
        message.channel.sendMessage("Zenka kiffe les bisous sucrés ;)")
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
    
    
        
    
    /*
    //Sayen
    key_word1 = new RegExp("tats");key_word3 = new RegExp("ayen");
    test = key_word1.test(message.content); test2= key_word2.test(message.content); test3= key_word3.test(message.content)
    if(  (test && test2) || (test && test3) ){
        message.channel.sendMessage(
             '\n'+
            "-------------------------------Stats Saye'n-Raigin-----------------------------"+'\n'+'\n'
            +"Prénom :      Pedo"+'\n'
            +"Apparition:   inconnu génération"+'\n'
            +"Type :        Pedobear"+'\n'
            +"Move :        Pedo Move"+'\n'
            +"Puissance :   130"+'\n'
            +"Précision :   95 %"+'\n'
            +"Description : Pedo Pedo Pedo je Pedo en force"+'\n'
            +"Crie : http://dinosoria.com/sons/animaux/0164.mp3"+'\n'
            +"Avatar : http://a403.idata.over-blog.com/5/05/03/27/Photos1/P--21-.jpg"+'\n'
       )
    }
    
    //Hazi
    key_word1 = new RegExp("stats");key_word3 = new RegExp("hazi");
    test = key_word1.test(message.content); test2= key_word2.test(message.content); test3= key_word3.test(message.content)
    if(  (test && test2) || (test && test3) ){
        message.channel.sendMessage(
             '\n'+
            "--------------------------------Stats Hazimuth--------------------------"+'\n'+'\n'
            +"Prénom :      Sado"+'\n'
            +"Apparition:   génération 2000"+'\n'
            +"Type :        R.I.P"+'\n'
            +"Move :        Suicide"+'\n'
            +"Puissance :   15"+'\n'
            +"Précision :   100 %"+'\n'
            +"Description : Please, tue-moi !"+'\n'
            +"Crie : http://pokemontrash.com/pokedex/images/cris/435.ogg"+'\n'
            +"Avatar : https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7M04eyebIVVHbsVn5YBLUXvoOagZdh2GJ14oBrD6T1DvgZro9"+'\n'
       )
    }
    
     //Myuki
    key_word1 = new RegExp("stats");key_word2 = new RegExp("miyuki");key_word3 = new RegExp("<@217608165955469313>");
    test = key_word1.test(message.content); test2= key_word2.test(message.content); test3= key_word3.test(message.content)
    if(  (test && test2) || (test && test3) ){
        message.channel.sendMessage(
             '\n'+
            "--------------------------------Stats Miyuki--------------------------"+'\n'+'\n'
            +"Prénom :      Triso"+'\n'
            +"Apparition:   génération 2"+'\n'
            +"Type :        Poison"+'\n'
            +"Move :        Proute-Bave bien baveuse"+'\n'
            +"Puissance :   35"+'\n'
            +"Précision :   95 %"+'\n'
            +"Description : Proute2.0. Je sais pas quoi dire de ma vie. Ah oui je rage pas mal ;p"+'\n'
            +"Crie : http://www.pokemontrash.com/pokedex/images/cris/272.ogg"+'\n'
            +"Avatar : http://www.pokemontrash.com/pokedex/images/sugimori/272.png"+'\n'
       )
       message.guild.members.get(process.env.Myuki).setNickname("Proute 2.0")
    }*/
})
