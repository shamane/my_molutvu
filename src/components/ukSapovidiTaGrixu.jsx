import React, { Component } from 'react';

import { Table } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import uk_sapovidi_ta_grixu from './../api/uk_sapovidi_ta_grixu'

class ukSapovidiTaGrixu extends Component {
  render() {
    const showingRowsOfCategory = (data) => {
      if (data.length > 0) {
        const row = data.map((item, index) => {
          return (<li>{index+1 }. {item.name}</li>)
        })
        return row
      }
    };

    const rows = uk_sapovidi_ta_grixu.map((_row, index) => {
      return (<tr>
        <td>{index +1 }</td>
        <td class="text-left">
          {_row.category}
          {showingRowsOfCategory(_row.items)}
        </td>
      </tr>)
    });

    let links = ["http://forsoul.herokuapp.com/religion-saint-books/2016-isus-mii-hospod-khrystyianskyi-molytovnyk"]

    return (
      <Container className="p-4">
        <Jumbotron>
          <h4 className="header">Заповіді та гріхи</h4>
          <Table striped bordered condensed hover>
            <tbody>
              <tbody>{rows}</tbody>
            </tbody>
          </Table>
        </Jumbotron>

        <h5>Матеріал запозичений з :</h5>
        <ul>
          {links.map(i => {
            return <li><a href={i} target="blank">{i}</a></li>
          })}
        </ul>
      </Container>
    )
  }
}

export default ukSapovidiTaGrixu;
