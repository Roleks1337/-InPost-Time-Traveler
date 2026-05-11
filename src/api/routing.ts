export async function fetchRoute(
  startLat: number,
  startLon: number,
  endLat: number,
  endLon: number
): Promise<{ coords: [number, number][]; distance: number | null; duration: number | null }> {
  const url = `https://router.project-osrm.org/route/v1/foot/${startLon},${startLat};${endLon},${endLat}?overview=full&geometries=geojson`;

  try {
    const response = await fetch(url);
    if (!response.ok) return { coords: [], distance: null, duration: null };

    const data = await response.json();
    if (data.routes && data.routes.length > 0) {
      const route = data.routes[0];
      const coords = route.geometry.coordinates.map((coord: [number, number]) => [coord[1], coord[0]]);
      return { 
        coords, 
        distance: route.distance, 
        duration: route.duration
      };
    }
  } catch (error) {
    console.error('Failed to fetch route:', error);
  }

  return { coords: [], distance: null, duration: null };
}
