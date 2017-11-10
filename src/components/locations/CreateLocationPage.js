import React from 'react';
import {connect} from 'react-redux';
import CreateLocationForm from './CreateLocationForm';
import * as locationActions from "../../actions/locationActions";

class CreateLocationPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="CreateLocationPage">
        <h1>Create Location</h1>
        <CreateLocationForm
          fetching={this.props.locations.fetching}
          location={this.props.location}
          />
      </div>
    );
  }

}
function getLocationById(locations, id) {
  const location = locations.filter(location => location.id == id);
  if (location) return location[0]
  return null; // ? strange.
}
function mapStateToProps(state, ownProps) {
  const locationId = ownProps.params.id;

  let location = {name: ''};

  if (locationId && state.locations.locations.length) {

    location = getLocationById(state.locations.locations, locationId);
  }
  return {
    location,
    locations: state.locations
  };
}
export default connect(mapStateToProps)(CreateLocationPage);
