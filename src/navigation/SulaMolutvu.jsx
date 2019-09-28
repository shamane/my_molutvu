import React, { Component } from 'react';

import { Table } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import data from './../api/data'

class SulaMolutvu extends Component {
  render() {

    const getRow = (data) => {
      if (data.length > 0) {
        const row = data.map((_row, index) => {

          return (<li>{_row.name}</li>)
        })
        return row
      }
    };

    const rows2 = data[0].items.map((product, index) => {
      return (<tr>
        <td>
          {index +1 }
        </td>
        <td class="text-left">
          {product.sick}
        </td>
        <td class="text-left">
          {getRow(product.sumptomu)}
        </td>
        <td class="text-left">
          {getRow(product.liku)}
        </td>
      </tr>)
    });

    return (
      <Container className="p-3">
        <Jumbotron>
          <h3 className="header"></h3>
          <Table striped bordered condensed hover>
            <tbody>
              <tbody>{rows2}</tbody>
            </tbody>
          </Table>
        </Jumbotron>
      </Container>
    );
  }
}

export default SulaMolutvu;
