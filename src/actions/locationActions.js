import * as types from './actionTypes';
import axios from 'axios';

export function fetchLocations(dispatch) {
  return function(dispatch) {
    axios.get("http://rest.learncode.academy/api/tvollick/locations")
      .then(response => {
        dispatch({type: "FETCH_LOCATIONS_FULFILLED", payload: response.data});
      })
      .catch(error => {
        dispatch({type: "FETCH_LOCATIONS_REJECTED", payload: error});
      });
  }
}

export function putLocation(dispatch) {
  return function(dispatch) {
    dispatch({type: "PUT_LOCATION"});
    axios.post("http://rest.learncode.academy/api/tvollick/locations")
      .then(response => {
        dispatch({type: "PUT_LOCATION_FULFILLED", payload: response.data});
      })
      .catch(error => {
        dispatch({type: "PUT_LOCATION_REJECTED", payload, error});
      })
  }
}
