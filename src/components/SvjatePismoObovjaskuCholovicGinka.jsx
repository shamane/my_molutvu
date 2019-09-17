import React, { Component } from 'react';

import { Table } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

import obovjasku_cholovike_ginku from './../api/obovjasku_cholovike_ginku'

class SvjatePismoObovjaskuCholovicGinka extends Component {
  render() {

    const getBibleRow = (data) => {
      if (data.length > 0) {
        const row = data.map((_row, index) => {

          return (<li>{index+1 }. {_row.name} --- {_row.bible}</li>)
        })
        return row
      }
    };

    const getLinks = (data) => {
      if (data.length > 0) {
        const row = data.map((_row, index) => {
          return (<li>{index+1 }. {_row.name} --- ({_row.label_uk})</li>)
        })
        return row
      }
    };

    const rows5 = obovjasku_cholovike_ginku[0].subcategories.map((product, index) => {
      return (<tr>
        <td>
          {index +1 }
        </td>
        <td class="text-left">
          {product.name}
          {getBibleRow(product.items)}
        </td>
      </tr>)
    });

    const rows6 = obovjasku_cholovike_ginku[1].subcategories.map((product, index) => {
      return (<tr>
        <td>
          {index +1 }
        </td>
        <td class="text-left">
          {product.name}
          {getBibleRow(product.items)}
        </td>
      </tr>)
    });

    return (
      <Container className="p-3">
        <Jumbotron>
          <h3 className="header">Святе письмо і статут сімейного життя</h3>
          <h3 className="header">ЧОЛОВІК</h3>
          <Table striped bordered condensed hover>
            <tbody>
              <tbody>{rows5}</tbody>
            </tbody>
          </Table>

          <h3 className="header">ДРУЖИНА</h3>
          <Table striped bordered condensed hover>
            <tbody>
              <tbody>{rows6}</tbody>
            </tbody>
          </Table>
        </Jumbotron>
      </Container>
    );
  }
}

export default SvjatePismoObovjaskuCholovicGinka;
