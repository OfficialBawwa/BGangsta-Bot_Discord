const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const NSFW = require('discord-nsfw')
const colors = require('./../../colors.json')
const nsfw = new NSFW();
module.exports = {
    name: "hentai-ass",
    description: " nsfw cmd!",

    async run (client, message, args) {

if(message.channel.nsfw) {

const image = await nsfw.hentaiass();
const embed = new Discord.MessageEmbed()
    .setTitle(`Hentai Ass Image`)
    .setColor(colors.uptime)
    .setImage(image);
message.channel.send(embed);

} else {
message.channel.send("💢 channel is not nsfw")
}

    }
}


