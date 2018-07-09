import { determineDataSet } from '../switch';
import { people, planets, vehicles } from '../map-functions'
import { personInstanceArray } from '../../data/mockPeople'
import { planetInstanceArray } from '../../data/mockPlanets'
import { vehicleInstanceArray } from '../../data/mockVehicles'

jest.mock('../map-functions');

describe('switch', () => {

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

    it.skip('should have a default case', () => {
        determineDataSet('')

       expect(Error()).toHaveBeenCalledWith('Error')
    })
  })
})