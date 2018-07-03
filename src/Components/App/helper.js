


export const scroll = (data) => {
  const scrollInfo = data.results.reduce((scrollInfo, film) => {
      if (film.title === "A New Hope") {
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

export const people = (data) => {
  const people = data.results.map(person => {
    return {
            name: person.name,
            homeworld: person.homeworld,
            species: person.species,
            population: person.homeworld,
            favorite: false
          }
  })
  return people;
}

export const planets = (data) => {
  const planets = data.results.map(planet => {
    return {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: planet.residents,
      favorite: false
    }
  })
  return planets
}

export const vehicles = (data) => {
  const vehicles = data.results.map(vehicle => {
    return {
            name: vehicle.name,
            model: vehicle.model,
            vehicleClass: vehicle.vehicle_class,
            numberOfPassengers: parseInt(vehicle.crew) + parseInt(vehicle.passengers),
            favorite: false
          }  
  })
  return vehicles
}