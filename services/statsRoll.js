const { typeList } = require('../config.json');
const diceRoll = require('./diceRoll');

module.exports = type => {
  const status = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];

  const rollType = typeList[type];
  const rolls = [];

  for (let i = 0; i < 6; i++) {
    const currStatus = status[i];
    rolls.push(
      {
        key: currStatus,
        roll: diceRoll(...rollType).sort((a, b) => a - b)
      }
    );
  }


  if (type === "-s") {
    rolls.forEach(status => {
      const choosenRolls = [...status.roll];
      choosenRolls.shift();
      status.value = choosenRolls.reduce((value, total) => total += value, 0);
    })
  } else if (type === "-g") {
    rolls.forEach(status => {
      const choosenRolls = [...status.roll];
      choosenRolls.pop();
      status.value = choosenRolls.reduce((value, total) => total += value, 0);
    })
  } else {
    rolls.forEach(status => {
      status.value = status.roll.reduce((value, total) => total += value, 0)
    })
  }

  return rolls;
}