import fs from 'fs/promises';
import path from 'path';

let cachedCars = null;

export async function fetchUsedCars() {
  if (cachedCars) return cachedCars;

  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'usedCars.json');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const json = JSON.parse(fileContent);
    cachedCars = json.data.used_cars;
    return cachedCars;
  } catch (error) {
    console.error('Error reading usedCars.json:', error);
    throw new Error('Failed to load car listings');
  }
}

export async function fetchCarById(id) {
  const cars = await fetchUsedCars();
  return cars.find((car) => String(car.id) === String(id));
}
