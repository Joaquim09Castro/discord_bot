module.exports = {
  name: "avatar",
  aliases: ["icon", "pfp"],
  description: "Show the URL to all tagged users profile picturess\nIf no user is tagged, the profile picture displayed will the authors",
  usage: "<user tag>",
  execute(message, args) {
    if (!message.mentions.users.size)
      return message.channel.send(
        `Your avatar: ${message.author.displayAvatarURL({ format: "png", dynamic: true })}`
      );

    const avatarList = message.mentions.users.map(user => {
      return `${user.username}'s avatar: ${user.displayAvatarURL({ format: "png", dynamic: true })}`;
    });
    message.channel.send(avatarList);
  }
}