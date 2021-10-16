const discord = require("discord.js");
const colors = require('./../../colors.json')

module.exports = {
  name: "bot-token",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`<:bughunter:866155261017063424> WTF`)
    
    message.channel .send(embed)
    
  
  }
}



