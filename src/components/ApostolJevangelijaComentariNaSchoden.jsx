import React, { Component } from 'react';

import { Table } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import bible_for_every_day_with_comments from './../api/bible_for_every_day_with_comments'

class ApostolJevangelijaComentariNaSchoden extends Component {
  render() {

    const getCommentsForBibleDay = (data) => {
      if (data.length > 0) {
        const row = data.map((_row, index) => {
          return (<ul>
                    <li><b>{_row.bible_source}</b></li>
                    <li>{_row.original}</li>
                    <li>{_row.comment}</li>
                  </ul>)
        })
        return row
      }
    };

    const getDayFromBibleDay = (data) => {
      // return (data.offset.split('-')[0])
    }

    const rows4 = bible_for_every_day_with_comments.map((day, index) => {
      return (<tr>
        <td>
          {getDayFromBibleDay(day)}
        </td>
        <td class="text-left">
          {getCommentsForBibleDay(day.comments)}
        </td>
      </tr>)
    });

    return (
      <Container className="p-3">
        <Jumbotron>
          <h3 className="header">Апостол, Євангелія з коментарями на щодень</h3>
          <Table striped bordered condensed hover>
            <tbody>
              <tbody>{rows4}</tbody>
            </tbody>
          </Table>
        </Jumbotron>
      </Container>
    );
  }
}

export default ApostolJevangelijaComentariNaSchoden;
