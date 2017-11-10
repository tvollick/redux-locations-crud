import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LocationsList from './LocationsList';
import { fetchLocations } from '../../actions/locationActions';
import * as locationActions from "../../actions/locationActions";


class LocationsPage extends React.Component {
  constructor(props){
    super(props);

    this.handleDeleteLocation = this.handleDeleteLocation.bind(this);
  }

  componentWillMount() {
    this.props.actions.fetchLocations();
  }

  handleDeleteLocation(locationId) {
    console.log(locationId); 
    this.props.actions.deleteLocation(locationId);
  }

  render() {
    return(
      <div id="locationsPage">
        <h1>Locations</h1>

        {this.props.locations.fetching && <h4>Fetching</h4>}

        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <LocationsList
                locations={this.props.locations.locations}
                handleDeleteLocation={this.handleDeleteLocation}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function  mapStateToProps(state, ownProps) {
  return {
    locations: state.locations
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(locationActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LocationsPage);
