function calculateStops(mglt, consumables, distance) {
  const table = {
    day: 24,
    days: 24,
    week: 24 * 7,
    weeks: 24 * 7,
    month: 24 * 30,
    months: 24 * 30,
    year: 24 * 30 * 12,
    years: 24 * 30 * 12
  };
  const divConsumables = consumables.split(' ');
  const consumablesInHours = table[divConsumables[1]];

  if (consumablesInHours) {
    const totalConsumablesInHours =
      Number(divConsumables[0]) * Number(consumablesInHours);
    console.log(totalConsumablesInHours);
    const hoursToCompleteJourney = distance / Number(mglt);
    console.log(hoursToCompleteJourney);

    return Math.floor(hoursToCompleteJourney / totalConsumablesInHours);
  }
  return false;
}

export default calculateStops;
