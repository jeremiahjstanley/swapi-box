import { makeScroll } from './data-cleaner';
import { determineDataSet } from './helper.js';

export const getOpeningScroll = async () => {
  const url = 'https://swapi.co/api/films/';
  const response = await fetch(url);
  const parsedData = await response.json();
  return makeScroll(parsedData);
};

export const fetchData = async (type) => {
  const url = `https://swapi.co/api/${type}/`;
  const response = await fetch(url);
  const parsedData = await response.json();
  return determineDataSet(type, parsedData);
};     

export const fetchHomeworld = async (homeworld) => {
  const response = await fetch(homeworld);
  const parsedData = await response.json();
  return parsedData;
};

export const fetchSpecies = async (species) => {
  const response = await fetch(species);
  const parsedData = await response.json();
  return parsedData;
};

export const fetchResidents = (residents) => {
  const residentNames = residents.map(async resident => {
    const response = await fetch(resident);
    return await response.json();
  });
  return Promise.all(residentNames);
};