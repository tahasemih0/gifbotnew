const Discord = require('discord.js');

exports.run = function(client, message) {
  
 
const yükleniyor = client.emojis.get("734380834999762944")
const kullanici = client.emojis.get("734382368915456030")
const yıldız = client.emojis.get("734383770123239524")
const sosyal = client.emojis.get("734381029049106573")
const kitaplik = client.emojis.get("734380874069704764")
const js = client.emojis.get("734382917576425482")
const onay = client.emojis.get("734380165043454005")
const kodyaziyor = client.emojis.get("734380912011247646")
const ayarlar = client.emojis.get("734380937399238666")
const embed = new Discord.RichEmbed()
 
  .setThumbnail("https://cdn.discordapp.com/attachments/733689145662111744/734746013402660894/zed-bot.gif")
  .setColor('RANDOM')
  .setTitle('Zed-Bot İstatistik')
  .addField( yükleniyor + ' Gecikme', client.ping + 'ms')
  .addField( kullanici + ' Kullanıcılar', client.guilds.reduce((a, b) => a + b.memberCount, 0))
  .addField( yıldız + ' Kanallar', client.channels.size)
  .addField( sosyal + ' Sunucular', client.guilds.size)
  .addField( ayarlar + ' Bellek Kullanımı', (process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2))
  .addField( kitaplik + ' Kütüphanesi', `Discord.js`)
  .addField( js + `  Discord.js Sürümü`, Discord.version)
  .addField( onay + ' Yapımcım', '<@640126115167338506> Ve <@733616760116215868>')
  .addField( kodyaziyor + ' Botun Yapılmaya Başlandığı Tarih ', '**19.07.2020**')
    
 
 
 //napıyon ?
 
 
  message.channel.send(embed);
};

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: ['botbilgi','i'], 
  permLevel: 0 
};

exports.help = {
  name: 'istatistik', 
  description: 'Botun İstatiğini Atar',
  usage: '+istatistik' 
};