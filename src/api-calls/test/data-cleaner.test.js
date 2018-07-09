import { makeScroll, makePersonCard, makePlanetCard, makeVehicleCard} from '../data-cleaner'
import { films } from '../../data/mockFilms'
import { personInstance } from '../../data/mockPeople'
import { planetInstance } from '../../data/mockPlanets'
import { vehicleInstance } from '../../data/mockVehicles'

describe('data-cleaner', () => {

  describe('makeScroll', () => {
  
    it('should return an object', () => {
      const expectedArguments = films

      const actual = Object.keys(makeScroll(expectedArguments))
      const expected = [ 'title', 'releaseDate', 'scrollText' ]

      expect(actual).toEqual(expected)
    })
  })  

  describe('makePersonCard', () => {
  
    it('should return an object', () => {
      const expectedArguments = personInstance

      const actual = Object.keys(makePersonCard(expectedArguments))
      const expected = ['name', 'homeworld', 'species', 'population', 'type', 'favorite']

      expect(actual).toEqual(expected)
    })
  })  

  describe('makePlanetCard', () => {
  
    it('should return an object', () => {
      const expectedArguments = planetInstance

      const actual = Object.keys(makePlanetCard(expectedArguments))
      const expected = ['name', 'terrain','population','climate', 'residents', 'type', 'favorite']

      expect(actual).toEqual(expected)
    })
  })  

  describe('makeVehicleCard', () => {
  
    it('should return an object', () => {
      const expectedArguments = vehicleInstance

      const actual = Object.keys(makeVehicleCard(expectedArguments))
      const expected = ['name', 'model','vehicleClass','numberOfPassengers', 'type', 'favorite']

      expect(actual).toEqual(expected)
    })
  })  
})