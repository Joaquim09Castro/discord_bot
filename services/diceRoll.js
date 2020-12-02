module.exports = (amount, type) => {
  const rolls = [];
  for (let i = 0; i < amount; i++) {
    const value = Math.floor(Math.random() * type) + 1;
    rolls.push(value);
  }
  return rolls;
}