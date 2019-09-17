import React, { Component } from 'react';

import { Table } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import uk_sapovidi_pravoslavja from './../api/uk_sapovidi_pravoslavja'

class ukSapovidiPravoslavja extends Component {
  render() {
    const rows = uk_sapovidi_pravoslavja.map((_row, index) => {
      return (<tr>
        <td>{index +1 }</td>
        <td class="text-left">
          {_row.name}
         </td>
      </tr>)
    });


    return (
      <Container className="p-4">
        <Jumbotron>
          <h4 className="header">Заповіді православя</h4>
          <Table striped bordered condensed hover>
            <tbody>
              <tbody>{rows}</tbody>
            </tbody>
          </Table>
        </Jumbotron>
      </Container>
    )
  }
}

export default ukSapovidiPravoslavja;
