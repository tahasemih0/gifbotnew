const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args, msg) => {

    const embed = new Discord.RichEmbed()
    
    .setColor('BLACK')
    
    .addField(`ukqzn Gif Bot Yardım Menüsü!`,
              
    `+**gif-ara** Yazdığınız Kelime Hakkında Gif Aratır!
     +**man-gif** Rastgele Erkek Gifi Atar!
     +**woman-gif** Rastgele Kadın Gifi Atar!
     +**couple-gif** Rastgele Sevgili Gifi Atar!
     +**baby-gif** Rastgele Bebek Gifi Atar!
     +**animal-gif** Rastgele Hayvan Gifi Atar!

     **Ekstra**

     +**yardım-kullanıcı** Kullanıcı Komutlarını Gösterir!

     **Dikkat**

     **Random-Gif** | **Random-Pp** Sistemini Çalıştırmak İçin ; **random-gif** Ve **random-pp** Kanallarını Oluşturmanız Yeterli Olucaktır!

     **Linkler**

     [Botun Destek Sunucusuna Gitmek İçin Tıkla](https://discord.gg/dsC9B47)    
     [Botu Eklemek İçin Tıkla](https://discord.com/oauth2/authorize?client_id=734365123866656854&scope=bot&permissions=8)`)
    
     message.channel.send({embed});
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: 'yardım'
};