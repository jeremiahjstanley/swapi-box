import { cleanPerson, cleanPlanet } from './nested-calls';
import { makeVehicleCard } from './data-cleaner';

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





