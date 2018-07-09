import { determineDataSet, people, planets, vehicles, cleanPerson, cleanPlanet } from '../Components/App/helper'
import { peopleFull, personInstance, personInstanceArray } from '../data/mockPeople'
import { planetsFull, planetInstance, planetInstanceArray } from '../data/mockPlanets'
import { vehiclesFull, vehicleInstance, vehicleInstanceArray } from '../data/mockVehicles'

jest.mock('../Components/App/helper')

describe('helper', () => {

  describe('determineDataSet', () => {

    it('should invoke people with the correct arguments', () => {
      const type = 'people'
      const data = personInstanceArray

      determineDataSet(type, data)

      expect(people).toHaveBeenCalledWith(personInstanceArray);
    })

    it('should invoke planets with the correct arguments', () => {
      const type = 'planets'
      const data = planetInstanceArray

      determineDataSet(type, data)

     expect(planets).toHaveBeenCalledWith(planetInstanceArray);
    })

    it('should invoke vehicles with the correct arguments', () => {
      const type = 'vehicles'
      const data = vehicleInstanceArray

      determineDataSet(type, data)

     expect(vehicles).toHaveBeenCalledWith(vehicleInstanceArray);
    })

    it('should have a default case', () => {
        determineDataSet('')

       expect(console.log()).toHaveBeenCalledWith('error')
    })
  })

  describe('people', () => {
    it('should invoke cleanPerson the correct number of times', () => {
      const data = peopleFull

      people(data)

      expect(cleanPerson).toHaveBeenCalledTimes(10);
    })

    it('should return a promise', async () => {
      const expected = {favorite: false,
                        homeworld: 'Tatooine',
                        name: 'Luke Skywalker',
                        population: '200000',
                        species: 'Human',
                        type: 'person'}

      const actual = people(personInstanceArray)

      expect(actual).resolves.toEqual(expected)
    })
  })

  describe('planets', () => {
    it('should invoke cleanPlanet the correct number of times', () => {
      const data = planetsFull

      planet(data)

      expect(cleanPlanet).toHaveBeenCalledTimes(10);
    })

    it('should return a promise', async () => {
      const expected = {climate: 'temperate',
                        favorite: false,
                        name: 'Alderaan',
                        population: '2000000000',
                        residents: ['https://swapi.co/api/people/5/'],
                        terrain: 'grasslands, mountains',
                        type: 'planet'}

      const actual = planet(planetInstanceArray)

      expect(actual).resolves.toEqual(expected)
    })
  })

  describe('vehicles', () => {
    it('should invoke makeVehicleCard the correct number of times', () => {
      const data = vehiclesFull

      vehicles(data)

      expect(makeVehicleCard).toHaveBeenCalledTimes(10);
    })

    it('should return a promise', async () => {
      const expected = {favorite: false,
                        model: 'Digger Crawler',
                        name: 'Sand Crawler',
                        numberOfPassengers: 76,
                        type: 'vehicle',
                        vehicleClass: 'wheeled'}

      const actual = vehicles(vehicleInstanceArray)

      expect(actual).resolves.toEqual(expected)
    })
  })

  describe('cleanPerson', () => {
    it('should invoke fetchHomeworld method with the correct arguments', () => {
      const data = personInstance

      cleanPerson(data)

      expect(fetchHomeworld).toHaveBeenCalled(personInstance.homeworld);
    })

    it('should invoke fetchSpecies method with the correct arguments', () => {
      const data = personInstance

      cleanPerson(data)

      expect(fetchSpecies).toHaveBeenCalled(personInstance.species);
    })

    it('should invoke makePersonCard method', () => {
      const data = personInstance

      cleanPerson(data)

      expect(makePersonCard).toHaveBeenCalled();
    })
  })

  describe('cleanPlanet', () => {
    it('should invoke fetchResidents method with the correct arguments', () => {
      const data = planetInstance

      cleanPlanet(data)

      expect(fetchResidents).toHaveBeenCalled(planetInstance.residents);
    })

    it('should invoke makePlanetCard method', () => {
      const data = planetInstance

      cleanPlanet(data)

      expect(makePlanetCard).toHaveBeenCalled();
    })
  })
})