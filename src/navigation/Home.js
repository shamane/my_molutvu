import React, { Component } from 'react';
import LoadingSpinner from './loadingSpinner';
import Popup from './../components/Popup';

class Home extends Component {

  constructor() {
    super();
    this.state = { monsters: [], loading: false, showPopup: false }
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      fetch('https://yournotices.herokuapp.com/api/v1/positive/molutva')
        .then(response => response.json())
        .catch(error => console.log(error))
        .then(users => this.setState({ loading: false, monsters: users }));
        // .then(response => response.json())
        // .then(response => console.log("data is", response))
    });
  }

  togglePopup() {
    this.setState({ showPopup: !this.state.showPopup });
  }

  render() {
    const { monsters, loading } = this.state;

    const showRemoteDate = () => {
      if ( monsters['data'] ) {
        const row = monsters['data'].map((_row, index) => {
          // return (<li>{_row.attributes['data-uk'] } {_row.attributes['data-uk']} {_row.attributes['data-ru']} ({_row.attributes.source})</li>)
          return (<li><a href={_row.attributes['original-link']}  target="_blank">{_row.attributes['title-original-link-uk']} {_row.attributes['title-original-link-ru']}</a></li>)
        })
        return row;
      }
    };

    return (
      <div>
        <h3>Молитва і Святе Письмо</h3>
        <ul>
          <li>1. В Біблії в цілому записані 650 молитов.</li>
          <li>2. Першу згадку про молитву ми знаходимо в Буття 4:26.</li>
          <li>3. У Біблії зафіксовані близько 450 відповідей на молитви.</li>
          <li>4. Біблія містить 25 молитов Ісуса під час Його земного служіння.</li>
          <li>5. Апостол Павло говорить про молитву (молитви, молитовні прохання, молитовні звіти, заклики до молитви) 41 раз.</li>
          <li>6. Хоча молитися можна в будь-якій тілесної позі, Біблія згадує про п'ять з них: сидячи, стоячи, на колінах, обличчям до землі і з піднятими вгору руками.</li>
          <li>7. Ісус, кажучи про молитву (Луки 11: 1-4), вказує на шість аспектів, які потребують уваги: Божа вічна слава («Нехай святиться ім'я Твоє»), Його вічне Царство («нехай прийде Царство Твоє»), Його свята воля («нехай буде воля Твоя»), наше сьогодення («дай нам»), наше минуле («прости нам») та наше майбутнє («не введи нас»).</li>
          <li>8. В Біблії слово «Амінь» (яке буквально означає "нехай буде так», «так є», «істинно») вперше з'являється в книзі Числа 5:22.</li>
        </ul>

        <ul>
        <li>Усе, чого ви в молитві попросите, вірте, що одержите, і сповниться вам." Марка 11:24 Молитва – це розмова з Богом. Оскільки Бог знає думки твого серця, то ти можеш тільки думати, а Він буде слухати. 
          Ти можеш Йому дякувати за все, що Він тобі зробив. 
          Ти можеш Йому сказати, що каєшся за те, що вчинив неправильно. 
          Ти можеш молитися, щоб Він тобі допоміг та іншим.
          Коли молишся, то молись без сумніву і вір, що Господь почує тебе. Коли терпиш, то пам'ятай, що Бог завжди з тобою. Не сприймай терпінння як кару Божу, а як Його ласку до тебе, бо без терпіння важко досягти спасіння. Бог є Любов і Він любить тебе. ПАМ'ЯТАЙ ПРО ЦЕ !!!</li>
        </ul>

        <h3>Молитва і вчені</h3>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=Hj2HodCW3GY&feature=youtu.be&t=5713" target="_blank">о Ян Білецький, екзерцист 2019-09-14 про молитву</a></li>
          <li><a href="http://bible-facts.ru/633-neobyasnimoe-i-neveroyatnoe.html" target="_blank">ШОКИРУЮЩИЕ РЕЗУЛЬТАТЫ ИССЛЕДОВАНИЯ</a></li>
        </ul>

        <h4>"ШКОЛА МОЛИТВИ" ВЛАДИКИ ВЕНЕДИКТА</h4>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=JHvvcja7Po4">https://www.youtube.com/watch?v=JHvvcja7Po4 - Бог завжди вірить в нас і у нашу спосібність молитись</a></li>
          <li><a href="https://www.youtube.com/watch?v=kq5wD_sN4rg">https://www.youtube.com/watch?v=kq5wD_sN4rg - В молитві маємо робити все що можимо і тоді уповати на Господа</a></li>
          <li><a href="https://www.youtube.com/watch?v=cUT5yp2DKW4">https://www.youtube.com/watch?v=cUT5yp2DKW4 - Молитви за інших</a></li>
          <li><a href="https://www.youtube.com/watch?v=r_deZvYZhgc">https://www.youtube.com/watch?v=r_deZvYZhgc - Бог дає нам досвідчити себе в молитві</a></li>
          <li><a href="https://www.youtube.com/watch?v=exI1u92uA1M">https://www.youtube.com/watch?v=exI1u92uA1M - Молитва це праця та зусилля</a></li>
          <li><a href="https://www.youtube.com/watch?v=Cf0az929brA">https://www.youtube.com/watch?v=Cf0az929brA - Молитві потрібно вчитись</a></li>
          <li><a href="https://www.youtube.com/watch?v=iz-zm4vc2CQ">https://www.youtube.com/watch?v=iz-zm4vc2CQ - Молитися, віддавати себе Богові</a></li>
          <li><a href="https://www.youtube.com/watch?v=If_465gn6QU">https://www.youtube.com/watch?v=If_465gn6QU - Молитва, це розмова</a></li>
          <li><a href="https://www.youtube.com/watch?v=h6yxhWxezp0">https://www.youtube.com/watch?v=h6yxhWxezp0 - Молитва це зустріч</a></li>
          <li><a href="https://www.youtube.com/watch?v=rjwPf5WmcyU">https://www.youtube.com/watch?v=rjwPf5WmcyU - Молитись, це розмовляти з Господом</a></li>
          <li><a href="https://www.youtube.com/watch?v=Lz7_QK_yRx0">https://www.youtube.com/watch?v=Lz7_QK_yRx0 - Молитва, це унікальна зустріч особистостей</a></li>
          <li><a href="https://www.youtube.com/watch?v=YIF1RRb3Jx4">https://www.youtube.com/watch?v=YIF1RRb3Jx4 - Молитва, це нагода пізнавати Божу волю</a></li>
          <li><a href="https://www.youtube.com/watch?v=5PPVVxHiKR8">https://www.youtube.com/watch?v=5PPVVxHiKR8 - Важливість приготування перед молитвою</a></li>
          <li><a href="https://www.youtube.com/watch?v=nha-Un2Kw3w">https://www.youtube.com/watch?v=nha-Un2Kw3w - Чи ми віримо, про що просимо в молитві?</a></li>
          <li><a href="https://www.youtube.com/watch?v=RcPE1psAVPo">https://www.youtube.com/watch?v=RcPE1psAVPo - Якою має бути справжня МОЛИТВА? | Відкрита Церква. Діалоги</a></li>
          <li><a href="https://www.youtube.com/watch?v=0yAD3znGjNE">https://www.youtube.com/watch?v=0yAD3znGjNE - Уважність до подій в житті провадить нас до молитви</a></li>
          <li><a href="https://www.youtube.com/watch?v=FiWOxr9wtG8">https://www.youtube.com/watch?v=FiWOxr9wtG8 - Труднощі вчать нас молитві</a></li>
          <li><a href="https://www.youtube.com/watch?v=sf25a0MDQmY">https://www.youtube.com/watch?v=sf25a0MDQmY - В молитві маємо віддавати ціле своє життя Господеві</a></li>
          <li><a href="https://www.youtube.com/watch?v=wmqeSZbPDTQ">https://www.youtube.com/watch?v=wmqeSZbPDTQ - Життя показує якою є наша молитва</a></li>
          <li><a href="https://www.youtube.com/watch?v=xhjEBTgy0AI">https://www.youtube.com/watch?v=xhjEBTgy0AI - Важливість Молитви</a></li>
          <li><a href="https://www.youtube.com/watch?v=de2VglQNIs0">https://www.youtube.com/watch?v=de2VglQNIs0 - Чи ми лише прохачі в молитві</a></li>
          <li><a href="https://www.youtube.com/watch?v=dgn_jyntyZc">https://www.youtube.com/watch?v=dgn_jyntyZc - Молитовне правило</a></li>
          <li><a href="https://www.youtube.com/watch?v=4Rm6sM8F-q0">https://www.youtube.com/watch?v=4Rm6sM8F-q0 - Кожна молитва є унікальною і неповторною</a></li>
          <li><a href="https://www.youtube.com/watch?v=1yhYVmU944I">https://www.youtube.com/watch?v=1yhYVmU944I - Важливість тиші у молитві</a></li>
          <li><a href="https://www.youtube.com/watch?v=qkMtzfU8JFY">https://www.youtube.com/watch?v=qkMtzfU8JFY - Великий піст. Молитва, піст і милостиня</a></li>
          <li><a href="https://www.youtube.com/watch?v=CgoNoeuSgGc">https://www.youtube.com/watch?v=CgoNoeuSgGc - Чому ми не молимось ?</a></li>
         </ul>

        <h4>Іньше про молитву :</h4>
      
        {loading ? <LoadingSpinner /> :  <ul>{showRemoteDate()}</ul>}

        <ul>
          <li><a href="https://dyvensvit.org/top/1022338/">https://dyvensvit.org/top/1022338/ - ТВОЯ МОЛИТВА РОЗКАЖЕ ПРО ТЕБЕ УСЕ</a></li>
        </ul>

        <button onClick={this.togglePopup.bind(this)}>Click</button>

        {this.state.showPopup ?
          <Popup
            text='test'
            closePopup={this.togglePopup.bind(this)}
           />
          : null
        }

      </div>
    );
  }
}

export default Home;
