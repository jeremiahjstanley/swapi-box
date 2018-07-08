import { makePersonCard, makeVehicleCard, makePlanetCard } from './data-cleaner'
import { fetchHomeworld, fetchResidents, fetchSpecies} from './api-calls'

export const  determineDataSet = (type, parsedData) => {
    switch (type) {
  case 'people':
     return people(parsedData)
  case 'planets':
      return planets(parsedData)
  case 'vehicles':
      return vehicles(parsedData)
  default: 
      return console.error()
    }
}

export const people = async (data) => {
  const people = data.results
  const cleanPeople = people.map(person => cleanPerson(person))
  return Promise.all(cleanPeople)
}

export const planets = async (data) => {
  const planets = data.results
  const cleanPlanets = planets.map(planet => cleanPlanet(planet))
  return Promise.all(cleanPlanets);
}

export const vehicles = (data) => {
  const vehicles = data.results
  const cleanVehicles = vehicles.map(vehicle => makeVehicleCard(vehicle))
  return Promise.all(cleanVehicles)
}

export const cleanPerson = async (person) => {
  const cleanHomeworld = await fetchHomeworld(person.homeworld)
  const cleanSpecies = await fetchSpecies(person.species)
  return makePersonCard({...person, homeworld: cleanHomeworld, species: cleanSpecies})
} 

const cleanPlanet = async (planet) => {
  const cleanResidents = await fetchResidents(planet.residents)
  return makePlanetCard({...planet, residents: cleanResidents})
}




