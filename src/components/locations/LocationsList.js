import React from 'react';
import { Link } from 'react-router';

const LocationsList = (props) => {
  const listItems = props.locations.map((location, index) => {
    return (
      <li key={index} className="col-sm-4">
        <div className="locationsListItem panel panel-default">
          <div className="panel-body">
            <h4>{location.name ? location.name : "No Name"}</h4>
            <div>
              {location.addr1 && <div>{location.addr1}</div>}
              {location.addr2 && <div>{location.addr2}</div>}
              {location.city && <div>{location.city}</div>}
              {location.state && <div>{location.state}</div>}
              {location.zip && <div>{location.zip}</div>}
            </div>
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
        </div>
      </li>
    );
  });

  const list = (
    <div className="locationsList row">
      {listItems}
    </div>
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
    <div className="locationsListWrap container">
      {props.locations.length ? list : noLocations }
    </div>
  );
};

export default LocationsList;
