import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import LocationsList from './LocationsList';
import { fetchLocations } from '../../actions/locationActions';
import * as locationActions from "../../actions/locationActions";


class LocationsPage extends React.Component {
  constructor(props){
    super(props);


  }

  componentWillMount() {
    this.props.dispatch(fetchLocations());
  }



  render() {
    return(
      <div id="locationsPage">
        <h1>Locations</h1>

        {this.props.locations.fetching && <h4>Fetching</h4>}

        <LocationsList locations={this.props.locations.locations} />

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
export default connect(mapStateToProps)(LocationsPage);
