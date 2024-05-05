const chalk = require('chalk')
const moment = require('moment')
const kanal = '742043139430285454'
const log = message => {
  
    console.log(`${chalk.magenta(moment().format('YYYY-MM h:mm:ss'))} ${message}`)
}

module.exports = async client => {
    client.user.setPresence({activity:{name:`+yardım`},status: 'online'})
    log(chalk.green(`[ BOT ] KOMUTLAR YÜKLENDI KULLANIMA HAZIR `))
  } //açıldı mı bot yeeee açıldı babaaa pro xd hadi iyi videolar sana teşekkürler <3 adamsın! bunları silekte millet okumasın ya da hatıra olsun xd kalsın
//video başlıyor xd