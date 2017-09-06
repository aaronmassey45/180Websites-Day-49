import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class JobModal extends Component {
  render() {
    let { company, description, how_to_apply, title, id } = this.props.job;
    return (
      <Modal bsSize="large" show={this.props.show} aria-labelledby={`${id}Modal`}>
        <Modal.Header>
          <Modal.Title id={`${id}Modal`}>
            {title} for {company}
            <span className="pull-right"><Button onClick={this.props.onHide}>&times;</Button></span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2><b><u>Job Description</u></b></h2>
          <p dangerouslySetInnerHTML={{ __html: description }} />
          <h2><b><u>How to Apply</u></b></h2>
          <p dangerouslySetInnerHTML={{ __html: how_to_apply }} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
