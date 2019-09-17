import React, { Component } from 'react';

import { Table } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import grixuBlagenstva from './../api/grixuBlagenstva'

class GolovniGrixuBlagenstva extends Component {
  render() {

    const getPerson = (data) => {
      if (data.length > 0) {
        const urls = data.split(',').map((portion, index) => {
          return (<li><a href={portion} target='blank'>link {index = index + 1}</a></li>)
        })
        return urls
      }
    };

    const rows = grixuBlagenstva.map((product, index) => {
      return (<tr>
        <td>
          {index +1 }
        </td>
        <td class="text-left">
          <a href={product[0].key}>{product[0].label_uk}</a>
        </td>
        <td class="text-left">{product[0].description}</td>
        <td>{getPerson(product[0].resources)}</td>

        <td class="text-left">
          <a href={product[1].key}>{product[1].label_uk}</a>
        </td>
        <td class="text-left">{product[1].description}</td>
        <td>{getPerson(product[1].resources)}</td>
      </tr>)
    });

    return (
      <Container className="p-3">
        <Jumbotron>
          <h3 className="header">Головні гріхи та Блаженства</h3>
          <Table striped bordered condensed hover>
            <tbody>
              <tbody>{rows}</tbody>
            </tbody>
          </Table>
        </Jumbotron>
      </Container>
    );
  }
}

export default GolovniGrixuBlagenstva;
