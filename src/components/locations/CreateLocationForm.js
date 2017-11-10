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
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();

    this.props.actions.updateLocation(this.state.location);

    // is there a cleaner way to set nested state properties?
    this.setState((prevState) => {
      return Object.assign({}, prevState, {
        location: Object.assign({}, prevState.location, {
          name: '',
          addr1: '',
          addr2: '',
          city: '',
          state: '',
          zip: ''
        })
      });
    });
  }

  handleInputChange(field, val) {
    const newState = Object.assign({}, this.state);
    newState.location[field] = val;
    this.setState(newState);
  }

  render() {
    return(
      <form className="col-sm-6">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Location Name"
            value={this.state.location.name}
            onChange={(e) => {
              e.preventDefault();
              this.handleInputChange("name", e.target.value);
            }}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            placeholder="Address Line 1"
            value={this.state.location.addr1}
            onChange={(e) => {
              e.preventDefault();
              this.handleInputChange("addr1", e.target.value);
            }}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Address Line 2"
            value={this.state.location.addr2}
            onChange={(e) => {
              e.preventDefault();
              this.handleInputChange("addr2", e.target.value);
            }}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="City"
            value={this.state.location.city}
            onChange={(e) => {
              e.preventDefault();
              this.handleInputChange("city", e.target.value);
            }}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="State"
            value={this.state.location.state}
            onChange={(e) => {
              e.preventDefault();
              this.handleInputChange("state", e.target.value);
            }}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Zip"
            value={this.state.location.zip}
            onChange={(e) => {
              e.preventDefault();
              this.handleInputChange("zip", e.target.value);
            }}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary"
            onClick={this.handleFormSubmit}
          />
        </div>
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
