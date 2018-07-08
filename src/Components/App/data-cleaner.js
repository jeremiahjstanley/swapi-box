export const getNumber = () => {
  return Math.floor(Math.random() * 7 + 1)
}

export const makeScroll = (data) => {
  const scrollInfo = data.results.reduce((scrollInfo, film) => {
      if (film.episode_id === getNumber()) {
        scrollInfo = {
                      title: film.title,
                      releaseDate: film.release_date,
                      scrollText: film.opening_crawl,
                    }
      }
      return scrollInfo;
  }, {});
  return scrollInfo;
}

export const makePersonCard = (person) => {
  return {
          name: person.name,
          homeworld: person.homeworld.name,
          species: person.species.name,
          population: person.homeworld.population,
          type: 'person',
          favorite: false
        }
} 

export const makePlanetCard = (planet) => {
    return {
            name: planet.name,
            terrain: planet.terrain,
            population: planet.population,
            climate: planet.climate,
            residents: planet.residents,
            type: 'planet',
            favorite: false
          }  
} 

export const makeVehicleCard = (vehicle) => {
    return {
            name: vehicle.name,
            model: vehicle.model,
            vehicleClass: vehicle.vehicle_class,
            numberOfPassengers: parseInt(vehicle.crew, 10) + parseInt(vehicle.passengers, 10),
            type: 'vehicle',
            favorite: false
          }  
} 
