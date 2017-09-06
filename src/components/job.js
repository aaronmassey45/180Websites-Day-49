import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';
import JobModal from './modal';

export default class Job extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false
    }
  }

  close = () => {
    this.setState({ showModal: false })
  }

  open = () => {
    this.setState({ showModal: true })
  }
  render() {
    let { company, company_url, type, title, location, created_at } = this.props.job;

    return (
      <Col sm={4} className='Job'>
        <div className="JobStuff">
          <p>{type}</p>
          <p>{title}</p>
          <hr/>
          <p><b>Who:</b> <a href={company_url}>{company}</a></p>
          <p><b>Where:</b> {location}</p>
          <p><b>Posted:</b> {created_at}</p>
          <Button bsStyle="info" block onClick={this.open}>View More</Button>
        </div>
        <JobModal job={this.props.job} show={this.state.showModal} onHide={this.close}/>
      </Col>
    );
  }
}
