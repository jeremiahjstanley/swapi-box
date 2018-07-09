import { people, planets, vehicles } from './map-functions';

export const determineDataSet = (type, parsedData) => {
  switch (type) {
    case 'people':
      return people(parsedData);
    case 'planets':
      return planets(parsedData);
    case 'vehicles':
      return vehicles(parsedData);
    default: 
      throw new Error('Error');
  }
};