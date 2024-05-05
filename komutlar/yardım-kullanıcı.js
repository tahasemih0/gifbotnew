const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  
    const embed = new Discord.RichEmbed()
    
    .setColor('BLACK')
    
    .addField(`<a:efsane:734380937399238666> Kullanıcı Komutları <a:efsane:734380937399238666>`,

    `+**avatar** Etiketlediğiniz Kişinin Avatarını Gösterir!
     +**sunucu-bilgi** Sunucunun İstatistiklerini Gösterir!
     +**kullanıcı-bilgi** Etiketlediğiniz Kişinin Profilini Gösterir Veyada Kendi Profilnizi Gösterir!
     +**ping** Botun Pingini Gösterir!
     +**istatistik** Botun İstatistiğini Gösterir!

     <a:efsane:734380937399238666> **Dikkat** <a:efsane:734380937399238666>

     **Random-Gif** | **Random-Pp** Sistemini Çalıştırmak İçin ; **random-gif** Ve **random-pp** Kanallarını Oluşturmanız Yeterli Olucaktır!

     <a:efsane:734380937399238666> **Linkler** <a:efsane:734380937399238666>

     [Botun Destek Sunucusuna Gitmek İçin Tıkla](https://discord.gg/dsC9B47)    
     [Botu Eklemek İçin Tıkla](https://discord.com/oauth2/authorize?client_id=734365123866656854&scope=bot&permissions=8)`)
    
         message.channel.send({embed});
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım-kullanıcı','kullanıcı-yardım','yardımkullanıcı','kullanıcıyardım'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: '',
  usage: 'kullanıcı'
};