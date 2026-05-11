const NOMINATIM_BASE = 'https://nominatim.openstreetmap.org/reverse';

export async function reverseGeocode(lat: number, lon: number): Promise<string | null> {
  const url = `${NOMINATIM_BASE}?format=json&lat=${lat}&lon=${lon}&zoom=10&addressdetails=1`;

  const response = await fetch(url, {
    headers: {
      'User-Agent': 'InPostTimeTravelerDashboard/1.0 (educational project)',
      'Accept-Language': 'pl',
    },
  });

  if (!response.ok) return null;

  const data = await response.json() as {
    address?: {
      city?: string;
      town?: string;
      village?: string;
      municipality?: string;
      county?: string;
    };
  };

  const addr = data.address;
  if (!addr) return null;

  return addr.city ?? addr.town ?? addr.village ?? addr.municipality ?? null;
}
