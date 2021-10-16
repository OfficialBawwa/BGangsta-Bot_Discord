const {
  Color
} = require('../../config.json');
const Discord = require("discord.js");
const colors = require('./../../colors.json')

module.exports = {
  name: "jail",
  aliases: ["j"],
  description: "Shows image of jail",
  usage: "<user>",
  run: async (client, message, args) => {

    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor(colors.uptime)
    .setTitle("Jail")
    .setImage(encodeURI
      (`https://api.devs-hub.xyz/jail?image=${Member.user.displayAvatarURL({
        format: "png"
      })}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};


