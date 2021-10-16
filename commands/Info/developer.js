const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const colors = require('./../../colors.json')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "developer",
  description: "Shows all commands of the bot",
  botPermission: [],
  authorPermission: [],
  aliases: ["newhelp"],
  ownerOnly: false,
  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
      .setTitle("<a:757683476756562084:873297833581744218> <a:757683476836122725:873297883250688020> <a:757683476580401184:873297902502551562>")
      
      .addField(
        "About Me:",
        "Hi I am Bawwa! I am a web developer who codes in html,php,wordpress! I have been coding since 2020. Some of my hobbies are playing football, playing video games and coding! ",
      )
      .setThumbnail("https://cdn.discordapp.com/avatars/813890066781962271/1224647ef75999e8308f476e5b1658f5.png?size=1024")
      .setFooter("Make sure to show your support by joning to my Discord server(linked below)! If you have any questions about the bot, join support server linked below ")

      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('💞 • Invite Me') 
      .setURL("https://discord.com/api/oauth2/autho");
      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('🤔 • Support Server') 
      .setURL("https://discord.gg/kVseycra9C");


      return message.channel.send(helpEmbed,{
        button: [button1,button2],
      });

  },
};


