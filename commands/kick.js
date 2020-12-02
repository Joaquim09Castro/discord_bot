module.exports = {
  name: "kick",
  description: "Kick user from server",
  usage: "<user>",
  args: true,
  guildOnly: true,
  execute(message, args) {
    const taggedUser = message.mentions.users.first();
    return message.channel.send(`You wanted to kick: ${taggedUser.username}`);
  }
}