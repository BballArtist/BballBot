module.exports.run = (client, message, args) => {
  let victim = message.mentions.users.first()
  if(!victim) message.reply("**Please mention someone to kill**")
  else {
    if(victim == message.author) message.reply(`**You can't kill youself!**`)
    else {
      if(victim == client.user.id) message.reply("**X-X**")
      else{
        let replies = [
          (`**${victim.tag} has been shot**`),
          (`**${victim.tag} has been stabbed**`),
          (`**${victim.tag} has been drowned**`),
          (`**${victim.tag} has been electrified**`),
          (`**A goose honked at ${victim.tag} to death**`),
          (`**Some psychopath zapped ${victim.tag} with their laser eyes**`),
          (`**${victim.tag} ate a poisonous potato**`),
          (`**${victim.tag} just died L**`),
          (`**${victim.tag} was run over by car**`),
          (`**${victim.tag} was pushed into lava**`),
          (`**${victim.tag} died from death.fall.accident.water**`),
          (`**${victim.tag} was found dead in a dumpster**`),
          (`**Somebody decided ${victim.tag} tasted like chicken**`),
          (`**${victim.tag} got drunk and fell in the water**`),
          (`**${victim.tag} died from dying**`),
          (`**${victim.tag} was hacked by a big brain hacker**`),
          (`**An alien named MEE6 abducted ${victim.tag} in their sleep**`),
          (`**${victim.tag} dropped their Totem**`)]
        message.reply(`${replies[Math.floor(Math.random() * replies.length)]}`)
      }
    }
  }
}

module.exports.name = "kill"