import React from 'react';

const LocationsList = (props) => {
  const list = props.locations.map((location, index) => {
    return (
      <li key={index}>
        <h4>Location name</h4>
        <h6>{location.id}</h6>
      </li>
    );
  });
  return(
    <ul>
      {list}
    </ul>
  );
};

export default LocationsList;
