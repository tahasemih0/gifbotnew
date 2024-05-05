const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
require("./util/eventLoader")(client);

//-------------------- 7/24 Uptime --------------------//
//-------------------- 7/24 Uptime --------------------//
//-------------------- 7/24 Uptime --------------------//

const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(`7/24 Hizmet Vermekteyim!`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

//-------------------- 7/24 Uptime --------------------//
//-------------------- 7/24 Uptime --------------------//
//-------------------- 7/24 Uptime --------------------//

client.on("ready", async () => {
  client.appInfo = await client.fetchApplication();
  setInterval(async () => {
    client.appInfo = await client.fetchApplication();
  }, 600);
});

const log = message => {
  console.log(` ${message}`);
};
require("./util/eventLoader.js")(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.login(ayarlar.token);


//------------------------ Halka Açık Random Gif Pp -----------------------//
//------------------------ Halka Açık Random Gif Pp -----------------------//
//------------------------ Halka Açık Random Gif Pp -----------------------//

client.on("userUpdate", async(Revenge, NYKS) => {
  
if(Revenge.avatarURL === NYKS.avatarURL) return;
let RevengePP = NYKS.avatarURL.split("?")[0]

const Kanal = client.channels.filter(Revenge => Revenge.name === 'random-gif' && Revenge.type === 'text').array().forEach(Nucceteere => {
if (RevengePP.endsWith('.gif')) {
Nucceteere.send(new Discord.Attachment(RevengePP))
}
const Kanal2 = client.channels.filter(Revenge => Revenge.name === 'random-pp' && Revenge.type === 'text').array().forEach(Revenge => {
if (!RevengePP.endsWith('.gif')) {
Revenge.send(new Discord.Attachment(RevengePP))
}
})
})
})

//------------------------ Halka Açık Random Gif Pp -----------------------//
//------------------------ Halka Açık Random Gif Pp -----------------------//
//------------------------ Halka Açık Random Gif Pp -----------------------//

//------------------------ Eklendim Atıldım -----------------------//
//------------------------ Eklendim Atıldım -----------------------//
//------------------------ Eklendim Atıldım -----------------------//

client.on('guildDelete', guild => {

let rrrsembed = new Discord.RichEmbed()

.setColor("RED")
.setTitle("Bot Kicklendi")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi", guild.owner)
.addField("Sunucu Sahibi'nin İd'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

   client.channels.get('737612204991578183').send(rrrsembed);
  
});

client.on('guildCreate', guild => {

let rrrsembed = new Discord.RichEmbed()

.setColor("GREEN")
.setTitle("Bot Eklendi")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi", guild.owner)
.addField("Sunucu Sahibi'nin İd'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

   client.channels.get('737612204991578183').send(rrrsembed);
  
});

//------------------------ Eklendim Atıldım -----------------------//
//------------------------ Eklendim Atıldım -----------------------//
//------------------------ Eklendim Atıldım -----------------------//