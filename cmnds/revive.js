module.exports.run = (client, message, args) => {
  let undead = message.mentions.users.first()
  if (!undead) message.reply("**Please mention someone to revive**")
  else {
    let replies = [
      (`:man_mage: **${undead.tag} used their Totem**`),
      (`:man_mage: **${undead.tag} pulled an Uno reverse card**`),
      (`:man_mage: **${undead.tag} un-died**`),
      (`:man_mage: **${undead.tag} used an ender pearl**`),
      (`:man_mage: **${undead.tag} returned to their mortal body**`),
      (`:man_mage: **Somebody gave ${undead.tag} CPR**`),
      (`:man_mage: **${undead.tag} drank a health potion**`)]
      message.reply(`${replies[Math.floor(Math.random() * replies.length)]}`)
  }
}

module.exports.name = "revive"