import { getOpeningScroll, fetchData, fetchHomeworld, fetchSpecies, fetchResidents } from '../api-calls'
import { films } from '../../data/mockFilms'
import { speciesInstance } from '../../data/mockSpecies'
import { personInstance, peopleFull } from '../../data/mockPeople'
import { planetInstance, planetsFulls } from '../../data/mockPlanets'
import { vehiclesFull } from '../../data/mockVehicles'

describe('API calls', () => {
  describe('getOpeningScroll', () => {
    let expectedArguments; 

    beforeEach(() => {
      expectedArguments = 'https://swapi.co/api/films/';

      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
          json: () => Promise.resolve(films),
          ok: true
      })) 
    })

    it('should call fetch', async () => {
      await getOpeningScroll()

      expect(window.fetch).toHaveBeenCalledWith(expectedArguments);
    })

    it('should return an object if fetch is successful', async () => {
      const expected = films

      const actual = await getOpeningScroll()

      await expect(Object.keys(actual)).toEqual(['title', 'releaseDate', 'scrollText'])
    })
  })  

  describe('fetchData', () => {
    let expectedArguments;

    beforeEach(() => {
      
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
          json: () => Promise.resolve(peopleFull),
          ok: true
      })) 
    })

    it('should return fetch people data with the correct arguments', async () => {
      const expectedArguments = 'people'

      await fetchData(expectedArguments)
    
      expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/people/');
    })

    it('should return fetch vehicles data with the correct arguments', async () => {
      const expectedArguments = 'vehicles'

      await fetchData(expectedArguments)
    
      expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/vehicles/');
    })
  })

  describe('fetchHomeworld', () => {
    let expectedArguments;

    beforeEach(() => {
      expectedArguments = 'https://swapi.co/api/planets/1/';
      
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
          json: () => Promise.resolve(planetInstance),
          ok: true
      })) 
    })

    it('should return fetch data with the correct arguments', async () => {
      await fetchHomeworld(expectedArguments)
    
      expect(window.fetch).toHaveBeenCalledWith(expectedArguments);
    })

    it('should return an object if fetch is successful', async () => {
      const expected = planetInstance
      const actual = await fetchHomeworld(expectedArguments)
      await expect(actual).toEqual(expected)
    })
  })

  describe('fetchSpecies', () => {
    let expectedArguments;

    beforeEach(() => {
      expectedArguments = 'https://swapi.co/api/species/1/';
      
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
          json: () => Promise.resolve(speciesInstance),
          ok: true
      })) 
    })

    it('should return fetch data with the correct arguments', async () => {
      await fetchSpecies(expectedArguments)
    
      expect(window.fetch).toHaveBeenCalledWith(expectedArguments);
    })

    it('should return an object if fetch is successful', async () => {
      const expected = speciesInstance
      const actual = await fetchSpecies(expectedArguments)
      await expect(actual).toEqual(expected)
    })
  })

  describe('fetchResidents', () => {
    let expectedArguments;
    let residentArray;

    beforeEach(() => {
      residentArray =["https://swapi.co/api/people/5/"],
      expectedArguments = "https://swapi.co/api/people/5/",
            
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
          json: () => Promise.resolve(personInstance),
          ok: true
      })) 
    })

    it('should return fetch data with the correct arguments', async () => {
      await fetchResidents(residentArray)
    
      expect(window.fetch).toHaveBeenCalledWith(expectedArguments);
    })

    it('should return an promise if fetch is successful', async () => {
      const expected = [personInstance]

      const actual = fetchResidents(residentArray)

      expect(actual).resolves.toEqual(expected)
    })

    it('should return an array if fetch is successful', async () => {
      const expected = [personInstance]

      const actual = await fetchResidents(residentArray)
      
      await expect(actual).toEqual(expected)
    })
  })
})