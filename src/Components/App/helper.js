
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
  const people = data.results.map(async person => {
    const homeworld = await fetchData(person.homeworld)
    const species = await fetchData(person.species)
    console.log(homeworld, species)
    return {
            name: person.name,
            homeworld: homeworld.name,
            species: species.name,
            population: homeworld.population,
            favorite: false
          }
  })

  return Promise.all(people);
}

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error)
  }
}

export const planets = (data) => {
  const planets = data.results.map(async planet => {
    const residents = await fetchResidents(planet.residents)
    return {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: residents,
      favorite: false
    }
  })
  return planets
}

const fetchResidents = (residents) => {
  const residentNames = residents.map(async resident => {
    try {
      const response = await fetch(resident);
      const results = await response.json();
      return results.name 
    } catch (error) {
      console.error(error)
    }
  })
  return Promise.all(residentNames)
}

export const vehicles = (data) => {
  const vehicles = data.results.map(vehicle => {
    return {
            name: vehicle.name,
            model: vehicle.model,
            vehicleClass: vehicle.vehicle_class,
            numberOfPassengers: parseInt(vehicle.crew, 10) + parseInt(vehicle.passengers, 10),
            favorite: false
          }  
  })
  return vehicles
}


