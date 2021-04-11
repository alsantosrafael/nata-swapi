function calculateStops(mglt, consumables, distance) {
  const table = {
    day: 24,
    week: 24 * 7,
    month: 24 * 30,
    year: 24 * 30 * 12
  };
  const divConsumables = consumables.split(' ');
  const consumablesInHours = table[divConsumables[1]];

  if (consumablesInHours) {
    const totalConsumablesInHours =
      Number(divConsumables[0]) * Number(consumablesInHours);
    const hoursToCompleteJourney = distance / mglt;

    return totalConsumablesInHours / hoursToCompleteJourney;
  }
  return false;
}

export default calculateStops;
