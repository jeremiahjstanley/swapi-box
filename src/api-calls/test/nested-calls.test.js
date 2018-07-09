import { cleanPerson, cleanPlanet} from '../nested-calls';
import { fetchHomeworld, fetchResidents, fetchSpecies} from '../api-calls';
import { makePersonCard, makePlanetCard } from '../data-cleaner';
import { personInstance, personInstanceArray } from '../../data/mockPeople';
import { planetInstance, planetInstanceArray } from '../../data/mockPlanets';

jest.mock('../api-calls')
jest.mock('../data-cleaner')

describe('nested calls', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        json: () => Promise.resolve(personInstanceArray),
        ok: true
    })) 
  })

  describe('cleanPerson', () => {
    it('should invoke fetchHomeworld method with the correct arguments', () => {
      const data = personInstance

      cleanPerson(data)

      expect(fetchHomeworld).toHaveBeenCalledWith(personInstance.homeworld);
    })

    it('should invoke fetchSpecies method with the correct arguments', () => {
      const data = personInstanceArray

      cleanPerson(data)

      expect(fetchSpecies).toHaveBeenCalledWith(personInstance.species);
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

      expect(fetchResidents).toHaveBeenCalledWith(planetInstance.residents);
    })

    it('should invoke makePlanetCard method', () => {
      const data = planetInstance

      cleanPlanet(data)

      expect(makePlanetCard).toHaveBeenCalled();
    })
  })
})