import { people, planets, vehicles } from '../map-functions'
import { cleanPerson, cleanPlanet } from '../nested-calls'
import { makeVehicleCard } from '../data-cleaner'
import { peopleFull, personInstanceArray } from '../../data/mockPeople'
import { planetsFull, planetInstanceArray } from '../../data/mockPlanets'
import { vehiclesFull, vehicleInstanceArray } from '../../data/mockVehicles'

jest.mock('../nested-calls')
jest.mock('../data-cleaner')

describe('map-functions', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        json: () => Promise.resolve(personInstanceArray),
        ok: true
    })) 
  })
  
  describe('people', () => {
    it('should invoke cleanPerson the correct number of times', () => {
      const data = peopleFull

      people(data)

      expect(cleanPerson).toHaveBeenCalledTimes(9);
    })

    it.skip('should return a promise', async () => {
      const expected = [{favorite: false,
                        homeworld: 'Tatooine',
                        name: 'Luke Skywalker',
                        population: '200000',
                        species: 'Human',
                        type: 'person'}]

      const actual = people(personInstanceArray)

      expect(actual).resolves.toEqual(expected)
    })
  })

  describe('planets', () => {
    it('should invoke cleanPlanet the correct number of times', () => {
      const data = planetsFull

      planets(data)

      expect(cleanPlanet).toHaveBeenCalledTimes(9);
    })

    it.skip('should return a promise', async () => {
      const expected = [{climate: 'temperate',
                        favorite: false,
                        name: 'Alderaan',
                        population: '2000000000',
                        residents: ['https://swapi.co/api/people/5/'],
                        terrain: 'grasslands, mountains',
                        type: 'planet'}]

      const actual = planets(planetInstanceArray)

      expect(actual).resolves.toEqual(expected)
    })
  })

  describe('vehicles', () => {
    it('should invoke makeVehicleCard the correct number of times', () => {
      const data = vehiclesFull

      vehicles(data)
    
      expect(makeVehicleCard).toHaveBeenCalledTimes(10);
    })

    it.skip('should return a promise', async () => {
      const expected = [{favorite: false,
                         model: 'Digger Crawler',
                         name: 'Sand Crawler',
                         numberOfPassengers: 76,
                         type: 'vehicle',
                         vehicleClass: 'wheeled'}]

      const actual = vehicles(vehicleInstanceArray)

      expect(actual).resolves.toEqual(expected)
    })
  })
})
