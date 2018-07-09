import { fetchHomeworld, fetchSpecies, fetchResidents } from './api-calls'
import { makePersonCard, makePlanetCard} from './data-cleaner';

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

