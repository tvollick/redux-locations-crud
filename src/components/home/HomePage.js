import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>TileFive Locations</h1>
        <p>something awesome... </p>
        <Link
          to="/locations"
          className="btn btn-primary"
        >
          View Locations
        </Link>
      </div>
    );
  }
}

export default HomePage;
