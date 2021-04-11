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

  if (isNaN(mglt)) {
    return 'MGLT not informed.';
  }

  if (consumablesInHours) {
    const totalConsumablesInHours =
      Number(divConsumables[0]) * Number(consumablesInHours);

    const hoursToCompleteJourney = distance / Number(mglt);

    const stops = Math.floor(hoursToCompleteJourney / totalConsumablesInHours);

    if (stops > 1000000000000) {
      return ' Over 1000000000000 stops';
    }

    return stops;
  }
  return 'Not enough info informed.';
}

export default calculateStops;
