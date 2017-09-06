import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/index';
import { Button, ControlLabel, FormGroup, FormControl, Form } from 'react-bootstrap';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      job: '',
      location: ''
    }
  }
  onInputChange = (e) => {
    this.setState({ [e.target.id]: e.target.value })
  }
  handleSubmit = (e) =>{
    let { job, location } = this.state;
    e.preventDefault();
    this.props.fetchJobs(job, location);
  }
  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup>
          <ControlLabel>What: </ControlLabel>
          {'  '}
          <FormControl
            id="job"
            placeholder="Search jobs..."
            value={this.state.job}
            onChange={this.onInputChange}
          />
        </FormGroup>
        {'  '}
        <FormGroup>
          <ControlLabel>Where: </ControlLabel>
          {'  '}
          <FormControl
            id="location"
            placeholder="Search locations..."
            value={this.state.location}
            onChange={this.onInputChange}
          />
        </FormGroup>
        {'  '}
        <Button type="submit" bsStyle="primary">
          Submit
        </Button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return { jobs: state.jobs }
}

export default connect(mapStateToProps, {fetchJobs})(SearchBar);
