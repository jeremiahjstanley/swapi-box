export const getOpeningScroll = jest.fn().mockImplementation(() => ({
  title: 'something',
  releaseDate:'something',
  scrollText: 'something'
}))

export const fetchData = jest.fn().mockImplementation(() => ({
  favorite: false,
  homeworld: 'Tatooine',
  name: 'Luke Skywalker',
  population: '200000',
  species: 'Human',
  type: 'person',
}))

