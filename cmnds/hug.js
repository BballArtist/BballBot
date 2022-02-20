module.exports.run = (client, message, args) => {
  let hugged = message.mentions.users.first()
  let hugger = message.author
  if(!hugged) message.reply("**Please mention someone to hug**")
  else {
    if(hugged == message.author) message.reply(`**${hugged.username} hugged theirself!  :smile: :heart:**`)
    else {
      if(hugged == client.user.id) message.reply(`**YAYA I get a hug!**
***hugs ${hugger.username} back*** :smile: :people_hugging:`)
      else{
        message.reply(`**${hugged.tag} got a warm and fuzzy hug!  :smile: :people_hugging: **`)
      }
    }
  }
}

module.exports.name = "hug"