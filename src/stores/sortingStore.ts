// File: sortingStore.ts 
// This store is responsible for tracking the current sorting type, either 'name' or 'distance'
// and sorting direction (ascending, descending). Sorting preference is persisted in localStoage 

import { atom } from 'nanostores';

type SortingType = 'name' | 'price';
type SortDirection = 'asc' | 'desc';

// Store for current sorting type (initialized to 'name')
export const sortingTypeStore = atom<SortingType | null>('name');

// Store for direction of each sorting type
export const sortDirectionStore = atom<Record<SortingType, SortDirection>>({
  name: 'asc',
  price: 'asc',
});

// Function to update sorting type and direction
export const setSortingType = (newType: SortingType) => {
  const currentType = sortingTypeStore.get();
  const currentDirection = sortDirectionStore.get()[newType];

  // If the same sorting type is clicked, toggle the direction
  if (currentType === newType) {
    const newDirection = currentDirection === 'asc' ? 'desc' : 'asc';
    sortDirectionStore.set({ ...sortDirectionStore.get(), [newType]: newDirection });
  } else {

    // If a new sorting type is clicked, update sorting type
    sortingTypeStore.set(newType);
  }

  localStorage.setItem('lastSortingType', newType);
  localStorage.setItem('sortDirection', JSON.stringify(sortDirectionStore.get()));
};




// Function to initialize sorting from localStorage
export const initializeSorting = () => {
  const lastSortingType = localStorage.getItem('lastSortingType');
  const storedDirections = localStorage.getItem('sortDirection');

  let parsedSortingType: SortingType | null = null;
  let parsedDirections: Record<SortingType, SortDirection> | null = null;

  // Check if lastSortingType is valid
  if (lastSortingType === 'name' || lastSortingType === 'price') {
    parsedSortingType = lastSortingType as SortingType;
  } else {
    parsedSortingType = 'name'; // Default value
    localStorage.setItem('lastSortingType', 'name');
  }

  // Check if storedDirections is valid JSON and has valid structure
  try {
    const directions = JSON.parse(storedDirections || '');
    if (
      directions &&
      typeof directions === 'object' &&
      directions.name &&
      directions.price &&
      (directions.name === 'asc' || directions.name === 'desc') &&
      (directions.price === 'asc' || directions.price === 'desc')
    ) {
      parsedDirections = directions as Record<SortingType, SortDirection>;
    } else {
      throw new Error('Invalid structure');
    }
  } catch (error) {
    // If parsing fails or the structure is invalid, set default directions
    parsedDirections = { name: 'asc', price: 'asc' };
    localStorage.setItem('sortDirection', JSON.stringify(parsedDirections));
  }

  // Apply valid sorting type and direction to stores
  sortingTypeStore.set(parsedSortingType);
  sortDirectionStore.set(parsedDirections);
};

