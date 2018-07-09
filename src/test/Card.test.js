import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Components/Card/Card'

describe('Card test', () => {
  let mockCard;
  let mockAddToFavorites;
  let mockRemoveFromFavorites;
  let wrapper;

  beforeEach(() => {
    mockCard = {}
    mockAddToFavorites = jest.fn()
    mockRemoveFromFavorites = jest.fn()
    wrapper = shallow(<Card 
                        card={mockCard}
                        addToFavorites={mockAddToFavorites}
                        removeFromFavorites={mockRemoveFromFavorites}
                      />)

  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render a vehicle card', () => {
    mockCard = {
                favorite: false,
                model: 'Digger Crawler',
                name: 'Sand Crawler',
                numberOfPassengers: 76,
                type: 'vehicle',
                vehicleClass: 'wheeled'
              }
    wrapper = shallow(<Card 
                    card={mockCard}
                    addToFavorites={mockAddToFavorites}
                    removeFromFavorites={mockRemoveFromFavorites}
                  />);
    const actual = wrapper.find('.vehicleCard').length;
    const expected = 1;

    expect(expected).toEqual(actual)
  })

  it('should render a planet card', () => {
    mockCard = {
                climate: 'temperate',
                favorite: false,
                name: 'Alderaan',
                population: '2000000000',
                residents: ['Leia Organa', 'Bail Prestor Organa' ,'Raymus Antilles'],
                terrain: 'grasslands, mountains',
                type: 'planet'
              }
    wrapper = shallow(<Card 
                    card={mockCard}
                    addToFavorites={mockAddToFavorites}
                    removeFromFavorites={mockRemoveFromFavorites}
                  />);
    const actual = wrapper.find('.planetCard').length;
    const expected = 1;

    expect(expected).toEqual(actual)
  })

  it('should render a character card', () => {
    mockCard = {
                favorite: false,
                homeworld: 'Tatooine',
                name: 'Luke Skywalker',
                population: '200000',
                species: 'Human',
                type: 'person'
              }
    wrapper = shallow(<Card 
                    card={mockCard}
                    addToFavorites={mockAddToFavorites}
                    removeFromFavorites={mockRemoveFromFavorites}
                  />);
    const actual = wrapper.find('.characterCard').length;
    const expected = 1;

    expect(expected).toEqual(actual)
  })

  it('should be able to add a character card to the favorites array', () => {
    mockCard = {
                favorite: false,
                homeworld: 'Tatooine',
                name: 'Luke Skywalker',
                population: '200000',
                type: 'person',
                species: 'Human'
              }
    wrapper = shallow(<Card 
                    card={mockCard}
                    addToFavorites={mockAddToFavorites}
                    removeFromFavorites={mockRemoveFromFavorites}
                  />);
    const button = wrapper.find('button')
    button.simulate('click')

    expect(mockCard.favorite).toEqual(true)
    expect(mockAddToFavorites).toHaveBeenCalledWith(mockCard)
  })

  it('should be able to remove a character card to the favorites array', () => {
    mockCard = {
                favorite: true,
                homeworld: 'Tatooine',
                name: 'Luke Skywalker',
                population: '200000',
                type: 'person',
                species: 'Human'
              }
    wrapper = shallow(<Card 
                    card={mockCard}
                    addToFavorites={mockAddToFavorites}
                    removeFromFavorites={mockRemoveFromFavorites}
                  />);
    const button = wrapper.find('button')
    button.simulate('click')

    expect(mockCard.favorite).toEqual(false)
    expect(mockRemoveFromFavorites).toHaveBeenCalledWith(mockCard.name)
  })

  it('should be able to add a planet card to the favorites array', () => {
    mockCard = {
                climate: 'temperate',
                favorite: false,
                name: 'Alderaan',
                population: '2000000000',
                residents: ['Leia Organa', 'Bail Prestor Organa' ,'Raymus Antilles'],
                terrain: 'grasslands, mountains',
                type: 'planet'
              }
    wrapper = shallow(<Card 
                    card={mockCard}
                    addToFavorites={mockAddToFavorites}
                    removeFromFavorites={mockRemoveFromFavorites}
                  />);
    const button = wrapper.find('button')
    button.simulate('click')

    expect(mockCard.favorite).toEqual(true)
    expect(mockAddToFavorites).toHaveBeenCalledWith(mockCard)
  })

  it('should be able to remove a planet card to the favorites array', () => {
    mockCard = {
                climate: 'temperate',
                favorite: true,
                name: 'Alderaan',
                population: '2000000000',
                residents: ['Leia Organa', 'Bail Prestor Organa' ,'Raymus Antilles'],
                terrain: 'grasslands, mountains',
                type: 'planet'
              }
    wrapper = shallow(<Card 
                    card={mockCard}
                    addToFavorites={mockAddToFavorites}
                    removeFromFavorites={mockRemoveFromFavorites}
                  />);
    const button = wrapper.find('button')
    button.simulate('click')

    expect(mockCard.favorite).toEqual(false)
    expect(mockRemoveFromFavorites).toHaveBeenCalledWith(mockCard.name)
  })

  it('should be able to add a vehicle card to the favorites array', () => {
    mockCard = {
                favorite: false,
                model: 'Digger Crawler',
                name: 'Sand Crawler',
                numberOfPassengers: 76,
                type: 'vehicle',
                vehicleClass: 'wheeled'
              }
    wrapper = shallow(<Card 
                    card={mockCard}
                    addToFavorites={mockAddToFavorites}
                    removeFromFavorites={mockRemoveFromFavorites}
                  />);
    const button = wrapper.find('button')
    button.simulate('click')

    expect(mockCard.favorite).toEqual(true)
    expect(mockAddToFavorites).toHaveBeenCalledWith(mockCard)
  })

  it('should be able to add a vehicle card to the favorites array', () => {
    mockCard = {
                favorite: true,
                model: 'Digger Crawler',
                name: 'Sand Crawler',
                numberOfPassengers: 76,
                type: 'vehicle',
                vehicleClass: 'wheeled'
              }
    wrapper = shallow(<Card 
                    card={mockCard}
                    addToFavorites={mockAddToFavorites}
                    removeFromFavorites={mockRemoveFromFavorites}
                  />);
    const button = wrapper.find('button')
    button.simulate('click')

    expect(mockCard.favorite).toEqual(false)
    expect(mockRemoveFromFavorites).toHaveBeenCalledWith(mockCard.name)
  })

})