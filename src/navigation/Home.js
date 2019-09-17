import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Плани читання Святого Письма</h2>
        <ul>
          <li><a href="http://forsoul.herokuapp.com/religion-saint-books/2018-bibliia-za-365-dniv-plan-chytannia" target="_blank">Біблія за 365 днів. План читання</a></li>
          <li><a href="http://forsoul.herokuapp.com/religion-saint-books/2018-plan-chytannia-sviatoho-pysma" target="_blank">План читання Святого письма</a></li>
          <li><a href="http://forsoul.herokuapp.com/religion-saint-books/2018-molytovne-chytannia-yevanheliia-vid-luky-o-dr-taras-barshchevskyi" target="_blank">Молитовне читання Євангелія від Луки</a></li>
          <li><a href="http://forsoul.herokuapp.com/religion-saint-books/2017-molytovne-chytannia-yevanheliia-vid-mateia-o-dr-taras-barshchevskyi" target="_blank">Молитовне читання Євангелія від Матея</a></li>
          <li><a href="http://forsoul.herokuapp.com/religion-saint-books/2015-molytovne-chytannia-yevanheliia-vid-marka-o-dr-taras-barshchevskyi" target="_blank">Молитовне читання Євангелія від Марка</a></li>
        </ul>
      </div>
    );
  }
}

export default Home;
