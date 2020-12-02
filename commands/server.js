module.exports = {
  name: "server",
  description: "Show server specs.",
  execute(message, args) {
    message.channel.send(
      `This server's name is: ${message.guild.name}\n`
      + `The current member count is: ${message.guild.memberCount}`
    );
  }
}