import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from '../CardContainer';

describe('CardContainer test', () => {
  let mockState;
  let mockCardType;
  let wrapper;
  let mockAddToFavorites;
  let mockRemoveFromFavorites;


  beforeEach(() => {
    mockState = { scroll: {},
                  favorites: [],
                  vehicles: [],
                  people: [],
                  planets: [],
                  error: {},
                  cardType: 'people',
                }
    mockCardType = 'favorites'
    mockAddToFavorites = jest.fn()
    mockRemoveFromFavorites = jest.fn()
  })

  it('should match the snapshot',() => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should render cards',() => {
    mockState = { scroll: {},
                  favorites: [],
                  vehicles: [],
                  people: [{}, {}, {}, {}, {}],
                  planets: [],
                  error: {},
                  cardType: 'people',
                }
    mockCardType = 'people'
    wrapper = shallow(<CardContainer 
                    state={mockState}
                    cardType={mockCardType}
                    addToFavorites={mockAddToFavorites}
                    removeFromFavorites={mockRemoveFromFavorites}
                  />);


    const expected = 1;
    const actual = wrapper.find('.full').length;

    expect(expected).toEqual(actual);
  })


  it('should render a message if the user has no favorites',() => {
    mockCardType = 'favorites'
    wrapper = shallow(<CardContainer 
                    state={mockState}
                    cardType={mockCardType}
                    addToFavorites={mockAddToFavorites}
                    removeFromFavorites={mockRemoveFromFavorites}
                  />);


    const expected = 1;
    const actual = wrapper.find('.favorites-error').length;

    expect(expected).toEqual(actual);
  })

  it('should render a error message if there is an error',() => {
    mockState = { scroll: {},
              favorites: [],
              vehicles: [],
              people: [],
              planets: [],
              error: {name: 'error name', message: 'error message'},
              cardType: 'people',
            }
    wrapper = shallow(<CardContainer 
                        state={mockState}
                        cardType={mockCardType}
                        addToFavorites={mockAddToFavorites}
                        removeFromFavorites={mockRemoveFromFavorites}
                  />);

    const expected = 1;
    const actual = wrapper.find('.error-header').length;

    expect(expected).toEqual(actual);
  })

  it('should render instructions on page load',() => {
    mockCardType = 'people'
    wrapper = shallow(<CardContainer 
                        state={mockState}
                        cardType={mockCardType}
                        addToFavorites={mockAddToFavorites}
                        removeFromFavorites={mockRemoveFromFavorites}
                      />);

    const expected = 1;
    const actual = wrapper.find('.instructions').length;

    expect(expected).toEqual(actual);
  })

})