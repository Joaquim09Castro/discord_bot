const diceRoll = require("../services/diceRoll");

module.exports = {
  name: "roll",
  aliases: ["r"],
  description: "Roll the desired dice type the desired amount of times.",
  usage: "<dice type>d<amount>",
  execute(message, args) {
    const [argAmount, type] = args.join('').split('d');

    const amount = argAmount === "" ?
      1 : argAmount;

    if (isNaN(amount) || isNaN(type)) {
      return message.reply('Invalid argument.\n**NOT A NUMBER**')
    }

    const rolls = diceRoll(amount, type);
    const total = rolls.reduce((value, total) => total + value);

    const response = `
    ${amount}d${type}
    \n\`\`\`${amount > 1 ? `Rolls: ${rolls.join(' | ')}\n` : ""}
    Total: ${total}\`\`\`
    `;

    message.reply(response);
  }
}