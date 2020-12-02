const { prefix, typeList } = require('../config.json');
const statsRoll = require("../services/statsRoll");

module.exports = {
  name: "stats",
  aliases: ["status"],
  description: "Roll status values.",
  usage: `
    <roll type>
    \`\`\`markdown
    # Type - (argument)\n
    * 3d6 - (-3)
    * 4d6 exclude smallest - (-s) "Default"
    * 4d6 exclude greatest - (-g)
    * 1d20 - (-20)\`\`\`
    `,
  execute(message, args) {
    if (args.length < 1)
      args = ["-s"];

    const [type] = args;

    if (typeList[type] === undefined)
      return message.reply(`Invalid argument.\nFor a list of valid arguments type \`${prefix}help stats\`.`);

    const [
      STR,
      DEX,
      CON,
      INT,
      WIS,
      CHA
    ] = statsRoll(type);

    message.reply(
      `
      \`\`\`
      STR: ${STR.value} | [${STR.roll}]
      DEX: ${DEX.value} | [${DEX.roll}]
      CON: ${CON.value} | [${CON.roll}]
      INT: ${INT.value} | [${INT.roll}]
      WIS: ${WIS.value} | [${WIS.roll}]
      CHA: ${CHA.value} | [${CHA.roll}]\`\`\`
      `
    );
  }
}