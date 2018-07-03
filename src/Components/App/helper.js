
const scroll = data.results.reduce((scrollInfo, film) => {
    if (film.title == "A New Hope") {
      scrollInfo = {
                    title: film.title,
                    releaseDate: film.release_date,
                    scrollText: film.opening_crawl,
                  }
    }
    return scrollInfo
}, {})