const { MessageEmbed } = require("discord.js");
const colors = require('./../../colors.json')

module.exports = {
    name: "coinflip",
    description: "flips a coin!",
    run: async(client, message, args) => {
        const choices= ["heads", "tails"];
        const choice = choices[Math.floor(Math.random() * choices.length)];
        let embed = new MessageEmbed()
        .setTitle("Coinflip!")
        .setDescription(`You flipped a **${choice}**!`)
        .setFooter("Bot made By HARP Productions | Prefix:!")
        message.channel.send(embed)
    }
}

