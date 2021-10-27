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
      .setTitle("Hey man,")
      
      .addField(
        "I am Bawwa! I am a web developer who codes in html,php,wordpress! I have been coding since 2020. Some of my hobbies are playing football, playing video games and coding! ",
      )
      .setThumbnail("https://te.legra.ph/file/de0e39e68465f31d02241.jpg")
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


