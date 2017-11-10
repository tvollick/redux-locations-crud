import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/locationActions';

class CreateLocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleNameChange(event) {
    const newLocation = Object.assign({}, this.state.location, {
      name: event.target.value
    });
    this.setState({
      location: newLocation
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();

    this.props.actions.updateLocation(this.state.location);

    // is there a cleaner way to set nested state properties?
    this.setState((prevState) => {
      return Object.assign({}, prevState, {
        location: Object.assign({}, prevState.location, {
          name: ''
        })
      });
    });
  }

  render() {
    return(
      <form>
        <input
          type="text"
          placeholder="Location Name"
          value={this.state.location.name}
          onChange={this.handleNameChange}
        />
        <input
          type="submit"
          value="Submit"
          onClick={this.handleFormSubmit}
        />
        {this.props.fetching && <span className="warning">Fetching</span>}
      </form>
    );

  }
}

function mapStateToProps(state, ownProps) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(locationActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateLocationForm);
