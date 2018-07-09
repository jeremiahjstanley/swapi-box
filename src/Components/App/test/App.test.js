import React from 'react';
import { fetchData } from '../../../api-calls/api-calls';
import { shallow } from 'enzyme';
import App from '../App';

jest.mock('../../../api-calls/api-calls')

describe('App', () => {
  let wrapper; 
  let mockFavorite

  beforeEach(() => {
    wrapper = shallow(<App />);
    mockFavorite = {favorite: true,
                    model: "Digger Crawler",
                    name: "Sand Crawler",
                    numberOfPassengers: 76,
                    type: "vehicle",
                    vehicleClass: "wheeled",
                    }
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state.scroll after componentDidMount runs', async () => {
    const expectedState = [ 'title', 'releaseDate', 'scrollText' ]
    const actualState = wrapper.instance().state;

    expect(Object.keys(actualState.scroll)).toEqual(expectedState);
  });

  it('addToFavorites method should add a favorite to state.favorites', () => {

    wrapper.instance().addToFavorites(mockFavorite);
    const actualState = wrapper.instance().state;

    expect(actualState.favorites.length).toEqual(1);
  });

  it('removeFromFavorites method should remove a favorite from state.favorites', () => {
    wrapper.instance().addToFavorites(mockFavorite);
    const previousState = wrapper.instance().state;

    expect(previousState.favorites.length).toEqual(1);

    wrapper.instance().removeFromFavorites(mockFavorite.name);
    const actualState = wrapper.instance().state;

    expect(actualState.favorites.length).toEqual(0);
  });

  it('displayCards should trigger a fetch call if the selected array is empty', () => {
    wrapper.setState({people:[]})
    wrapper.instance().displayCards('people');

    const expectedState = 'people'
    const actualState = wrapper.instance().state.cardType

    expect(fetchData).toHaveBeenCalled()
    expect(actualState).toBe(expectedState)
  });

  it.skip('displayCards should render an error message if there is an error', () => {
    wrapper.instance().displayCards('error')

    const expectedState = {name: 'Type of Error', message: 'Error Message'}
    const actualState = wrapper.instance().state.error

    expect(actualState).toBe(expectedState)
  });

  it('displayCards should display favorites if the favorites button is clicked', () => {
    wrapper.instance().displayCards('favorites');

    const expectedState = 'favorites'
    const actualState = wrapper.instance().state.cardType

    expect(actualState).toBe(expectedState)
  });

  it('displayCards should display the selected cards', () => {
    wrapper.setState({people:[{}, {}, {}]})
    wrapper.instance().displayCards('people');

    const expectedState = 'people'
    const actualState = wrapper.instance().state.cardType

    expect(actualState).toBe(expectedState)
  });

});




