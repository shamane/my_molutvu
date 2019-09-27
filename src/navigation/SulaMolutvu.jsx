import React, { Component } from 'react';

import { Table } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import data from './../api/data'

class SulaMolutvu extends Component {
  render() {

    return (
      <Container className="p-3">
        <Jumbotron>
          <h3 className="header"></h3>
          <Table striped bordered condensed hover>
            <tbody>
              <tbody>data</tbody>
            </tbody>
          </Table>
        </Jumbotron>
      </Container>
    );
  }
}

export default SulaMolutvu;
