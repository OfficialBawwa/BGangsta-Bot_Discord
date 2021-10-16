const Discord = require('discord.js')
const { DiscordBattleShip } = require("discord-battleship");
const colors = require('./../../colors.json')

const BattleShip = new DiscordBattleShip({
    embedColor: "RED", /* Any Discord.js Color Resolvable will work. */prefix: "!"
 /* This is the prefix that will be used in the users DM's for commands. 
                    You can set this to any string. */
});

module.exports = {
  name: 'ship',
  aliases: ["bs"],

  run: async (client , message , args) => {

     await BattleShip.createGame(message);
                          }
                          } 
    
