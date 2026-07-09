/**
 * Approximate coordinates for Nigerian state capitals / major cities.
 * Used to plot package movement on the map when only state names are stored.
 */
export const NIGERIA_STATE_COORDS: Record<string, [number, number]> = {
  Abia: [5.4527, 7.5248],
  Adamawa: [9.3265, 12.3984],
  "Akwa Ibom": [5.0077, 7.8536],
  Anambra: [6.2209, 6.9370],
  Bauchi: [10.3158, 9.8442],
  Bayelsa: [4.7719, 6.0699],
  Benue: [7.3369, 8.7400],
  Borno: [11.8333, 13.1500],
  "Cross River": [4.9517, 8.3220],
  Delta: [5.7040, 5.9340],
  Ebonyi: [6.2649, 8.0137],
  Edo: [6.3350, 5.6270],
  Ekiti: [7.7190, 5.3110],
  Enugu: [6.4584, 7.5464],
  FCT: [9.0579, 7.4951],
  Abuja: [9.0579, 7.4951],
  Gombe: [10.2791, 11.1670],
  Imo: [5.4920, 7.0260],
  Jigawa: [12.2280, 9.5616],
  Kaduna: [10.5264, 7.4382],
  Kano: [12.0022, 8.5920],
  Katsina: [12.9897, 7.6006],
  Kebbi: [12.4539, 4.1975],
  Kogi: [7.7338, 6.6906],
  Kwara: [8.4966, 4.5426],
  Lagos: [6.5244, 3.3792],
  Nasarawa: [8.4998, 8.5198],
  Niger: [9.6139, 6.5569],
  Ogun: [7.1608, 3.3478],
  Ondo: [7.2500, 5.2000],
  Osun: [7.7827, 4.5418],
  Oyo: [7.8774, 3.9470],
  Plateau: [9.2182, 9.5179],
  Rivers: [4.8156, 7.0498],
  Sokoto: [13.0059, 5.2476],
  Taraba: [8.8937, 11.3596],
  Yobe: [12.2939, 11.4390],
  Zamfara: [12.1702, 6.6597],
};

/**
 * Returns [lat, lng] for a given state name, or Nigeria's centre as fallback.
 */
export function getStateCoords(stateName: string): [number, number] {
  if (!stateName) return [9.082, 8.6753]; // Nigeria centre
  // Try exact match first, then case-insensitive
  const exact = NIGERIA_STATE_COORDS[stateName];
  if (exact) return exact;
  const key = Object.keys(NIGERIA_STATE_COORDS).find(
    (k) => k.toLowerCase() === stateName.toLowerCase()
  );
  return key ? NIGERIA_STATE_COORDS[key] : [9.082, 8.6753];
}
