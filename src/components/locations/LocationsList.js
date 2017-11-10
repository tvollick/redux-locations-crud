import React from 'react';
import { Link } from 'react-router';

const LocationsList = (props) => {
  const listItems = props.locations.map((location, index) => {
    return (
      <li key={index}>
        <div className="locationsListItem">
          <h4>{location.name ? location.name : "No Name"}</h4>
          <div className="btn-group">
            <Link
              className="btn btn-default"
              to={`/location/${location.id}`}
              >
              Edit
            </Link>             <button
              className="btn btn-danger"
              onClick={() => {
                props.handleDeleteLocation(location.id);
              }}
              >
              Delete
            </button>
          </div>
        </div>
      </li>
    );
  });

  const list = (
    <ul className="locationsList">
      {listItems}
    </ul>
  );

  const noLocations = (
    <div className="alert alert-info">
      There are no locations. Add one now!
      <div>
        <Link to="/location" className="btn btn-primary">Add Location</Link>
      </div>
    </div>
  );

  console.log()

  return(
    <div className="locationsListWrap">
      {props.locations.length ? list : noLocations }
    </div>
  );
};

export default LocationsList;
