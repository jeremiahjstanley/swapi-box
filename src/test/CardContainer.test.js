import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from '../Components/CardContainer/CardContainer';

describe('CardContainer test', () => {
  let mockCards;
  let mockDisplayFavorites;
  let mockError;
  let wrapper;
  let mockAddToFavorites;
  let mockRemoveFromFavorites;


  beforeEach(() => {
    mockCards = [{}, {}, {}];
    mockError = {};
    mockDisplayFavorites = false;
    mockAddToFavorites = jest.fn()
    mockRemoveFromFavorites = jest.fn()
    wrapper = shallow(<CardContainer 
                        cards={mockCards}
                        error={mockError}
                        displayFavorites={mockDisplayFavorites}
                        addToFavorites={mockAddToFavorites}
                        removeFromFavorites={mockRemoveFromFavorites}
                      />);
  })

  it('should match the snapshot',() => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should render a message if the user has no favorites',() => {
    mockCards = [];
    mockDisplayFavorites = true;
    wrapper = shallow(<CardContainer 
                        cards={mockCards}
                        error={mockError}
                        displayFavorites={mockDisplayFavorites}
                        addToFavorites={mockAddToFavorites}
                        removeFromFavorites={mockRemoveFromFavorites}
                      />);

    const expected = 1;
    const actual = wrapper.find('.favorites-error').length;

    expect(expected).toEqual(actual);
  })

  it('should render a error message if there is an error',() => {
    mockError = {name: 'error name', message: 'error message'};
    wrapper = shallow(<CardContainer 
                        cards={mockCards}
                        error={mockError}
                        displayFavorites={mockDisplayFavorites}
                        addToFavorites={mockAddToFavorites}
                        removeFromFavorites={mockRemoveFromFavorites}
                      />);

    const expected = 1;
    const actual = wrapper.find('.error-header').length;

    expect(expected).toEqual(actual);
  })

  it('should render instructions on page load',() => {
    mockCards = [];
    wrapper = shallow(<CardContainer 
                        cards={mockCards}
                        error={mockError}
                        displayFavorites={mockDisplayFavorites}
                        addToFavorites={mockAddToFavorites}
                        removeFromFavorites={mockRemoveFromFavorites}
                      />);

    const expected = 1;
    const actual = wrapper.find('.instructions').length;

    expect(expected).toEqual(actual);
  })

})