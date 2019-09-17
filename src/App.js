import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './navigation/Home';
import About from './navigation/About';
import Contact from './navigation/Contact';

import { Table } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import GolovniGrixuBlagenstva from './components/GolovniGrixuBlagenstva';
import SvjatePismo from './components/SvjatePismo';
import SvjatePismoObovjaskuCholovicGinka from './components/SvjatePismoObovjaskuCholovicGinka';
import SvjateChetverojevangelijaIstoruchnist from './components/SvjateChetverojevangelijaIstoruchnist';
import ApostolJevangelijaComentariNaSchoden from './components/ApostolJevangelijaComentariNaSchoden';
import GolovniVaduChesnotu from './components/GolovniVaduChesnotu';
import ukSapovidiTaGrixu from './components/ukSapovidiTaGrixu';
import ukSapovidiPravoslavja from './components/ukSapovidiPravoslavja';

import ReplacementListModal from './ReplacementListModal';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const bible_for_every_day1 = []

class App extends Component {
  render() {

    return (
      <Router>
        <div>
          <h2>Святе Письмо, читання його щодня, тлумачення</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> / </Link></li>
              <li><Link to={'/pismo'} className="nav-link">Святе Письмо. </Link></li>
              <li><Link to={'/apostol-jevangeliga'} className="nav-link">Апостол, Євангелія, Коментар на щодень.  </Link></li>
              <li><Link to={'/pismo-podiji'} className="nav-link">Послідовність Євангельських подій за чотирма Євангелістами.  </Link></li>
              <li><Link to={'/obovjasku'} className="nav-link">Обовязки чоловіка і жінки згідно Святого Письма.  </Link></li>
              <li><Link to={'/vadu-chesnotu'} className="nav-link">Вади та чесноти.  </Link></li>
              <li><Link to={'/grixu-blagenstva'} className="nav-link">Гріхи та блаженства.  </Link></li>
              <li><Link to={'/sapovidi-grixu'} className="nav-link">Заповіді та гріхи.  </Link></li>
              <li><Link to={'/sapovidi-pravolavja'} className="nav-link">Заповіді православя.  </Link></li>
              <li><Link to={'/#'} className="nav-link">Спокуси.  </Link></li>
              <li><Link to={'/about'} className="nav-link">Про проект</Link></li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/pismo' component={SvjatePismo} />
            <Route path='/apostol-jevangeliga' component={ApostolJevangelijaComentariNaSchoden} />
            <Route path='/pismo-podiji' component={SvjateChetverojevangelijaIstoruchnist} />
            <Route path='/obovjasku' component={SvjatePismoObovjaskuCholovicGinka} />
            <Route path='/vadu-chesnotu' component={GolovniVaduChesnotu} />
            <Route path='/grixu-blagenstva' component={GolovniGrixuBlagenstva} />
            <Route path='/sapovidi-grixu' component={ukSapovidiTaGrixu} />
            <Route path='/sapovidi-pravolavja' component={ukSapovidiPravoslavja} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
