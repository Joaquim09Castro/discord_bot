module.exports = {
  name: "user-info",
  description: "Show user it's info.",
  execute(message, args) {
    message.channel.send(
      `Your username: ${message.author.username}\n`
      + `Your ID: ${message.author.id}`
    )
  }
}