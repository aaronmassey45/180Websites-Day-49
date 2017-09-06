import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import Job from './job';

export default class JobContainer extends Component {
  render() {
    let { jobs } = this.props;
    let stuff;
    if (!jobs) {
        return stuff = <div>Loading...</div>;
    }
    stuff = jobs.map((job, index) => {
      return <Job key={job.id} job={job} index={index} />
    })
    return (
      <Grid className='JobContainer'>
        <Row>{stuff}</Row>
      </Grid>
    );
  }
}
