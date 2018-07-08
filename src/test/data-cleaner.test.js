import { getNumber, makeScroll, makePersonCard, makePlanetCard, makeVehicleCard} from '../Components/App/data-cleaner'
import { films } from '../data/mockFilms'
import { people } from '../data/mockPeople'
import { planets } from '../data/mockPlanets'
import { vehicles } from '../data/mockVehicles'

describe('data cleaner', () => {
  describe('getNumber', () => {
  
    it('should return an number', () => {
      const actual = typeof getNumber()
      const expected = 'number'

      expect(actual).toEqual(expected)
    })
  })

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
      const expectedArguments = people

      const actual = Object.keys(makePersonCard(expectedArguments))
      const expected = ['name', 'homeworld', 'species', 'population', 'favorite']

      expect(actual).toEqual(expected)
    })
  })  

  describe('makePlanetCard', () => {
  
    it('should return an object', () => {
      const expectedArguments = planets

      const actual = Object.keys(makePlanetCard(expectedArguments))
      const expected = ['name', 'terrain','population','climate', 'residents', 'favorite']

      expect(actual).toEqual(expected)
    })
  })  

  describe('makeVehicleCard', () => {
  
    it('should return an object', () => {
      const expectedArguments = vehicles

      const actual = Object.keys(makeVehicleCard(expectedArguments))
      const expected = ['name', 'model','vehicleClass','numberOfPassengers','favorite']

      expect(actual).toEqual(expected)
    })
  })  
})