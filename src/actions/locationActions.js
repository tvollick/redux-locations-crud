import * as types from './actionTypes';
import axios from 'axios';

const API_URL = 'http://rest.learncode.academy/api/tilefive/locations';

export function fetchLocations(dispatch) {
  return function(dispatch) {
    axios.get(API_URL)
      .then(response => {
        dispatch({type: "FETCH_LOCATIONS_FULFILLED", payload: response.data});
      })
      .catch(error => {
        dispatch({type: "FETCH_LOCATIONS_REJECTED", payload: error});
      });
  }
}

export function updateLocation(location) {
  const apiUrl = location.id ? `${API_URL}/${location.id}` : API_URL;
  return function(dispatch) {
    dispatch({type: "PUT_LOCATION"});

    if (location.id) {
      axios.put(apiUrl, Object.assign({}, location))
        .then(response => {
          dispatch({type: "PUT_LOCATION_FULFILLED", payload: response.data});
        })
        .catch(error => {
          dispatch({type: "PUT_LOCATION_REJECTED", error});
        });
    } else {
      axios.post(apiUrl, Object.assign({}, location))
        .then(response => {
          dispatch({type: "PUT_LOCATION_FULFILLED", payload: response.data});
        })
        .catch(error => {
          dispatch({type: "PUT_LOCATION_REJECTED", error});
        });
    }
  };
}

export function deleteLocation(locationId) {
  return function (dispatch) {
    console.log(locationId);
    if ( !locationId ) return;
    const apiUrl = `${API_URL}/${locationId}`;
    axios.delete(apiUrl)
      .then(response => {
        dispatch({type: "DELETE_LOCATION_FULFILLED", payload: locationId});
      })
      .catch(error => {
        console.log(error);
      });
  }
}
