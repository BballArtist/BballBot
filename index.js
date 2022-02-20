const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("BballBot is running YAAAAAY")
})

const Database = require("@replit/database")

const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const fs = require("fs");
const prefix = "!"
client.commands = new Discord.Collection();
const commands = fs.readdirSync("./cmnds").filter(file => file.endsWith(".js"))
for(file of commands) {
  const commandName = file.split(".")[0]
  const command = require(`./cmnds/${commandName}`)
  client.commands.set(commandName, command)
}

const db = new Database()

client.on("messageCreate", message => {
  if(message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const commandName = args.shift()
    const command = client.commands.get(commandName)
    if(!command) return 
    command.run(client, message, args)
}
})

client.login(process.env.token)