const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';

export async function fetchUsedCars() {
 
const res = await fetch(`${baseUrl}/data/usedCars.json`);
  if (!res.ok) {
    throw new Error('Failed to fetch car listings');
  }

  const json = await res.json();
  return json.data.used_cars;
}
 export async function fetchCarById(id) {
  const cars = await fetchUsedCars();
  return cars.find(car => String(car.id) === String(id));
}