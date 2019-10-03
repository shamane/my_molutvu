import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './navigation/Home';
import About from './navigation/About';
import Contact from './navigation/Contact';

import PoraduoJana from './navigation/PoraduoJana';
import SulaMolutvu from './navigation/SulaMolutvu';
import MolutvaPomerli from './navigation/MolutvaPomerli';
import MojeMolutovnePravulo from './components/MojeMolutovnePravulo';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <Router>
      <div>
        <h2>Молитва</h2>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> / </Link></li>
            <li><Link to={'/poradu-o-jana'} className="nav-link">Згідно порад о.Яна   </Link></li>
            <li><Link to={'/sula-molutvu'} className="nav-link">Категорії з книги "Сила молитви"   </Link></li>
            <li><Link to={'#'} className="nav-link">Категорії з книги з Борислава "до якого святого молитись"   </Link></li>
            <li><Link to={'#'} className="nav-link">Молитви по псалтирю по потребах   </Link></li>
            <li><Link to={'/molutva-sa-pomerlux'} className="nav-link">Молитви за померлих   </Link></li>
            <li><Link to={'/molutvne-pravulo'} className="nav-link">Моє молитовне правило / мій молитовник   </Link></li>
            <li><Link to={'/contact'} className="nav-link">Контакт</Link></li>
            <li><Link to={'/about'} className="nav-link">Про проект</Link></li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/poradu-o-jana' component={PoraduoJana} />
          <Route path='/sula-molutvu' component={SulaMolutvu} />
          <Route path='/molutva-sa-pomerlux' component={MolutvaPomerli} />
          <Route path='/molutvne-pravulo' component={MojeMolutovnePravulo} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
