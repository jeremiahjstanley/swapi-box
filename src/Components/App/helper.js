


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
  const characters = data.results.map(character => {
    return {
            name: character.name,
            homeworld: character.homeworld,
            species: character.species,
            population: character.homeworld,
            favorite: false
          }
  })
  return characters;
}

export const planets = (data) => {
  console.log(data)
}

export const vehicles = (data) => {
  console.log(data)
}