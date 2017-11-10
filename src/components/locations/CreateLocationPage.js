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
          />
      </div>
    );
  }

}

function mapStateToProps(state, ownProps) {
  return {
    locations: state.locations
  };
}
export default connect(mapStateToProps)(CreateLocationPage);
