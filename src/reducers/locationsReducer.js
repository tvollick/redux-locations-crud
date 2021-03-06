import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function locationsReducer(state = initialState.locations, action) {
  switch(action.type) {
    // FETCH LOCATIONS
    case types.FETCH_LOCATIONS:
      return Object.assign({}, state, {
        fetching: true
      });

      break;
    case types.FETCH_LOCATIONS_FULFILLED:
      return Object.assign({}, state, {
        fetching: false,
        locations: action.payload
      });
      break;
    case types.FETCH_LOCATIONS_REJECTED:
      return Object.assign({}, state, {
        fetching: false,
        error: action.payload
      });
      break;

    // PUT/UPDATE Location
    case types.PUT_LOCATION:
      return Object.assign({}, state, {
        fetching: true
      });
      break;
    case types.PUT_LOCATION_FULFILLED:
      return Object.assign({}, state, {
        locations: [...state.locations, action.payload],
        fetching: false
      });
      break;

    case types.DELETE_LOCATION_FULFILLED:
      return Object.assign({}, state, {
        locations: state.locations.filter(location => location.id !== action.payload)
      }); 
      break;

    default:
      return state;
      break; // break tags necessary after return?
  }
}
