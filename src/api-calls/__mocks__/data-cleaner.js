export const makeVehicleCard = jest.fn().mockImplementation((vehicle) => ({
 "favorite": false,
 "model": "Digger Crawler",
  "name": "Sand Crawler",
  "numberOfPassengers": 76,
  "type": "vehicle",
  "vehicleClass": "wheeled"
}))

export const makePlanetCard = jest.fn().mockImplementation((planet) => ({
  "climate": "temperate",
  "favorite": false,
  "name": "Alderaan",
  "population": "2000000000", 
  "residents": ["https://swapi.co/api/people/5/"],
  "terrain": "grasslands, mountains", "type": "planet"
}))

export const makePersonCard = jest.fn().mockImplementation((person) => ({
  "favorite": false,
  "homeworld": "Tatooine",
  "name": "Luke Skywalker",
  "population": "200000",
  "species": "Human",
  "type": "person"
}))
