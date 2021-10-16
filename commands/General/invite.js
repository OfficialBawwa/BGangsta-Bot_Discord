const Discord = require('discord.js')
const { MessageButton } = require('discord-buttons');
const colors = require('./../../colors.json')
const {MessageActionRow} = require('discord-buttons');


module.exports = {
    name: "invite",
    description: "invite command!",
    aliases: ["invite"],
    async run (client, message, args) {


      //code
let embed = new Discord.MessageEmbed()
.setTitle('Invite Me / Support Me.')
.setDescription('**Hey** Its me you favourite doctor, plumber, massager. **Jonny Sins**')
.setColor(colors.uptime)
.addField('**:link: Invite Me**','\n [Click here](https://www.harptech.tk) To Invite Me To Your Server.', true)
.addField(':link: **Support Server**','\n [Click here](https://discord.gg/kVseycra9C) To Join Our Support Server.', true)
.setTimestamp()
.setFooter(`Requested by ${message.author.tag}`)

const support = new MessageButton()
.setID('support')
.setLabel('Support!')
.setStyle('green')
.setEmoji('💎')

const button = new MessageButton()
    .setStyle('url')
    .setURL('https://discord.com/oauth2/authorize?client')
    .setLabel('Invite!')
 
 
let row = new MessageActionRow();
row.addComponent(button);
row.addComponent(support);


//Do same for all buttons

message.channel.send("", {
  embed : embed,
  component: row
})


    }
}




