import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/index';
import Navbar from './navbar';
import SearchBar from './searchbar';
import JobContainer from './jobcontainer';
import '../App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchJobs("node","");
  }

  render() {
    let { jobs } = this.props;
    return (
      <div className='App'>
        <Navbar />
        <div className="container">
          <h1><a href="https://github.com/">GitHub</a> Jobs</h1>
          <SearchBar />
          <JobContainer jobs={jobs}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { jobs: state.jobs }
}

export default connect(mapStateToProps, {fetchJobs})(App);
