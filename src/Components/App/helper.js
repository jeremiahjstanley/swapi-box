import {makePersonCard, makeVehicleCard, makePlanetCard} from './data-cleaner';
import {fetchHomeworld, fetchResidents, fetchSpecies} from './api-calls';

export const determineDataSet = (type, parsedData) => {
  switch (type) {
    case 'people':
      return people(parsedData);
    case 'planets':
      return planets(parsedData);
    case 'vehicles':
      return vehicles(parsedData);
    default: 
      throw new Error('Error');
  }
};

export const people = async (parsedData) => {
  const people = parsedData.results;
  const cleanPeople = people.map(person => cleanPerson(person));
  return Promise.all(cleanPeople);
};

export const planets = async (parsedData) => {
  const planets = parsedData.results;
  const cleanPlanets = planets.map(planet => cleanPlanet(planet));
  return Promise.all(cleanPlanets);
};

export const vehicles = (parsedData) => {
  const vehicles = parsedData.results;
  const cleanVehicles = vehicles.map(vehicle => makeVehicleCard(vehicle));
  return Promise.all(cleanVehicles);
};

export const cleanPerson = async (person) => {
  const cleanHomeworld = await fetchHomeworld(person.homeworld);
  const cleanSpecies = await fetchSpecies(person.species);
  return makePersonCard({...person, 
    homeworld: cleanHomeworld, species: cleanSpecies});
}; 

export const cleanPlanet = async (planet) => {
  const cleanResidents = await fetchResidents(planet.residents);
  return makePlanetCard({...planet, residents: cleanResidents});
};





