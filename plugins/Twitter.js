import fg from 'api-dylux'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `📌 مثال : \n*${usedPrefix + command}* https://twitter.com/fernandavasro/status/1569741835555291139?t=ADxk8P3Z3prq8USIZUqXCg&s=19`
          m.reply(wait)    
          try {
          let { SD, HD, desc, thumb, audio } = await fg.twitter(args[0])
          let te = ` 
┌─⊷ *TWITTER DL*
▢ الوصف: ${desc}
└───────────`
conn.sendFile(m.chat, HD, 'twitter.mp4', te, m)
await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })

} catch (e) {
          m.reply(`✳️ تأكد من أن الرابط من تويتر`)
        } 

}
handler.help = ['twitter'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(twitter|tw|تويتر)$/i
handler.diamond = true

export default handler
