import React, { Component } from 'react';

import { Table } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import bible_jevangelski_podiji from './../api/bible_jevangelski_podiji'

class SvjateChetverojevangelijaIstoruchnist extends Component {

  render() {

    const getRow = (data) => {
      if (data.length > 0) {
        const row = data.map((_row, index) => {

          return (<li>{index+1 }. {_row.event}</li>)
        })
        return row
      }
    };

    const rows2 = bible_jevangelski_podiji.map((product, index) => {
      return (<tr>
        <td>
          {index +1 }
        </td>
        <td class="text-left">
          {product.category}
          {getRow(product.subcategories)}
        </td>
      </tr>)
    });

    return (
      <Container className="p-3">
        <Jumbotron>
          <h3 className="header">Послідовність Євангельських подій за чотирма Євангелістами</h3>
          <Table striped bordered condensed hover>
            <tbody>
              <tbody>{rows2}</tbody>
            </tbody>
          </Table>
        </Jumbotron>
      </Container>
    )
  }
}

export default SvjateChetverojevangelijaIstoruchnist;
