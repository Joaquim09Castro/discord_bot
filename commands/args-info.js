module.exports = {
  name: "args-info",
  description: "Show sent message arguments",
  usage: "<argument list>",
  args: true,
  execute(message, args) {
    if (args[0] === "foo") {
      return message.channel.send("bar");
    }

    message.channel.send(
      `
      Command name: ${command}\n
      Arguments: ${args}\n
      Argument length: ${args.length}
      `
    );
  }
}