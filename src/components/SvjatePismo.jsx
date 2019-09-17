import React, { Component } from 'react';

import { Table } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import bible from './../api/bible'

class SvjatePismo extends Component {
  render() {

    const formatLinksForRow = (data) => {
      if ( data  && data.length > 0 ) {
        const links = data.map((link, index) => {
          return ((<a href={link.link} target='blank'> {index = index + 1} - {link.name};</a>))
        })
        return links
      }
    }

    const getRow = (data) => {
      if (data.length > 0) {
        const row = data.map((_row, index) => {

          return (<li>{index+1 }. {_row.name} --- ({_row.label_uk}): {formatLinksForRow(_row.links)}</li>)
        })
        return row
      }
    };

    const rows2 = bible[0].subcategories.map((product, index) => {
      return (<tr>
        <td>
          {index +1 }
        </td>
        <td class="text-left">
          {product.name}
          {getRow(product.items)}
        </td>
      </tr>)
    });

    const rows3 = bible[1].subcategories.map((product, index) => {
      return (<tr>
        <td>
          {index +1 }
        </td>
        <td class="text-left">
          {product.name}
          {getRow(product.items)}
        </td>
      </tr>)
    });

    return (
      <Container className="p-3">
        <Jumbotron>
          <h3 className="header">Святе письмо (Старий Завіт)</h3>
          <Table striped bordered condensed hover>
            <tbody>
              <tbody>{rows2}</tbody>
            </tbody>
          </Table>

          <h3 className="header">Святе письмо (Новий Завіт)</h3>
          <Table striped bordered condensed hover>
            <tbody>
              <tbody>{rows3}</tbody>
            </tbody>
          </Table>

        </Jumbotron>
      </Container>
    )
  }
}

export default SvjatePismo;
