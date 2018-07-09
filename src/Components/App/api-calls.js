import { makeScroll } from './data-cleaner'
import { determineDataSet } from './helper.js'

export const getOpeningScroll = async () => {
  const url = 'https://swapi.co/api/films/'
  const response = await fetch(url);
  const data = await response.json();
  return makeScroll(data)
}

export const fetchData = async (type) => {
  const url = `https://swapi.co/api/${type}/`
  const response = await fetch(url);
  const data = await response.json();
  return determineDataSet(type, data)
}      

export const fetchHomeworld = async (homeworld) => {
  const response = await fetch(homeworld)
  const data = await response.json();
  return data;
}

export const fetchSpecies = async (species) => {
  const response = await fetch(species)
  const data = await response.json();
  return data;
}

export const fetchResidents = (residents) => {
  const residentNames = residents.map(async resident => {
    const response = await fetch(resident);
    return await response.json();
  })
  return Promise.all(residentNames)
}