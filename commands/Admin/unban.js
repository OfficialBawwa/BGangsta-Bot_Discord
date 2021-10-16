const colors = require('./../../colors.json')

module.exports = {
  name: "unban",
  aliases: ["ub"],
  usage: "unban",
  description: "unbans member",
  run: async (client, message, args) => {
    const {member, mentions} = message
    const tag = `<@${member.id}`
      if (
        member.hasPermission('BAN_MEMBERS') ||
        member.hasPermission('ADMINISTRATOR')
      ) if (!args[0]) return message.channel.send(`${tag}> <a:no:865963806483808256> Please specify a user to unban!`);
      {
        const user = await message.channel.guild.members.unban(args[0]);
        return message.channel.send(`<a:yes:865963544380964864> ${user.tag} was unbanned`);

      }
        
      
  }
}

