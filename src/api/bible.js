const bible = [
  { id: 1, category: 'Книги Старого Заповіту', subcategories: [
    { id: 1, name: 'Пятикнижжя Мойсеєве', items: [
        { id: 1, name: 'Буття', label_uk: '1М', links: [
          { id: 1, link: 'https://www.bible.com/bible/188/GEN.1.UKRK', name: 'Куліша' },
          { id: 2, link: 'https://www.bible.com/bible/186/GEN.1.UBIO', name: 'Огієнка' },
          { id: 3, link: 'https://www.bible.com/bible/1755/GEN.1.UTT', name: 'Турконяка' }
        ]},
        { id: 2, name: 'Вихід', label_uk: '2М', links: [
          { id: 1, link: 'https://www.bible.com/bible/188/EXO.1.UKRK', name: 'Куліша' },
          { id: 2, link: 'https://www.bible.com/bible/186/EXO.1.UBIO', name: 'Огієнка' },
          { id: 3, link: 'https://www.bible.com/bible/1755/EXO.1.UTT', name: 'Турконяка' }
        ]},
        { id: 3, name: 'Левит', label_uk: '3М', links: [
          { id: 1, link: 'https://www.bible.com/bible/188/LEV.1.UKRK', name: 'Куліша' },
          { id: 2, link: 'https://www.bible.com/bible/186/LEV.1.UBIO', name: 'Огієнка' },
          { id: 3, link: 'https://www.bible.com/bible/1755/LEV.1.UTT', name: 'Турконяка' }
        ]},
        { id: 4, name: 'Числа', label_uk: '4М', links: [
          { id: 1, link: 'https://www.bible.com/bible/188/NUM.1.UKRK', name: 'Куліша' },
          { id: 2, link: 'https://www.bible.com/bible/186/NUM.1.UBIO', name: 'Огієнка' },
          { id: 3, link: 'https://www.bible.com/bible/1755/NUM.1.UTT', name: 'Турконяка' }
        ]},
        { id: 4, name: 'Повторення Закону', label_uk: '5М', links: [
          { id: 1, link: 'https://www.bible.com/bible/188/DEU.1.UKRK', name: 'Куліша' },
          { id: 2, link: 'https://www.bible.com/bible/186/DEU.1.UBIO', name: 'Огієнка' },
          { id: 3, link: 'https://www.bible.com/bible/1755/DEU.1.UTT', name: 'Турконяка' }
        ]}
      ]
    },
    { id: 2, name: 'Книги Історичні', items: [
        { id: 1, name: 'Книга Ісуса Навина (Книга Єгошуї)', label_uk: 'Єг' },
        { id: 2, name: 'Книга Суддів', label_uk: 'Суд' },
        { id: 3, name: 'Книга Рут', label_uk: 'Рут' },
        { id: 4, name: 'Перша книга Самуїлова (Перша книга царів)', label_uk: '1Сам' },
        { id: 5, name: 'Друга книга Самуїлова (Друга книга царів)', label_uk: '2Сам' },
        { id: 6, name: 'Перша книга царів', label_uk: '1Цар' },
        { id: 7, name: 'Друга книга царів', label_uk: '2Цар' },
        { id: 8, name: 'Перша книга хроніки', label_uk: '1Хр' },
        { id: 9, name: 'Друга книга хроніки', label_uk: '2Хр' },
        { id: 10, name: 'Книга Ездри', label_uk: 'Езд' },
        { id: 11, name: 'Книга Неемії', label_uk: 'Неем' },
        { id: 12, name: 'Книга Естер', label_uk: 'Ест' }]
    },
    { id: 3, name: 'Книги Навчальні Поетичні', items: [
        { id: 1, name: 'Книга Йова', label_uk: 'Йов' },
        { id: 2, name: 'Книга Псалмів', label_uk: 'Пс' },
        { id: 3, name: 'Книга приповістей Соломонових', label_uk: 'Пр' },
        { id: 4, name: 'Книга Еклезіястова (Проповідника)', label_uk: 'Екл' },
        { id: 5, name: 'Пісня над піснями', label_uk: 'Пісн' }]
    },
    { id: 4, name: 'Книги пророцькі', items: [
        { id: 1, name: 'Книга пророка Ісаї', label_uk: 'Іс' },
        { id: 2, name: 'Книга пророка Єремії', label_uk: 'Єр' },
        { id: 3, name: 'Плач Єремії', label_uk: 'Плач' },
        { id: 4, name: 'Книга пророка Єзекіїля', label_uk: 'Єз' },
        { id: 5, name: 'Книга пророка Даниїла', label_uk: 'Дан' },
        { id: 6, name: 'Книга пророка Осії', label_uk: 'Ос' },
        { id: 7, name: 'Книга пророка Йоіла', label_uk: 'Йоіл' },
        { id: 8, name: 'Книга пророка Амоса', label_uk: 'Ам' },
        { id: 9, name: 'Книга пророка Овдія', label_uk: 'Овд' },
        { id: 10, name: 'Книга пророка Йони', label_uk: 'Йона' },
        { id: 11, name: 'Книга пророка Михея', label_uk: 'Мих' },
        { id: 12, name: 'Книга пророка Наума', label_uk: 'Наум' },
        { id: 13, name: 'Книга пророка Авакума', label_uk: 'Ав' },
        { id: 14, name: 'Книга пророка Софонії', label_uk: 'Соф' },
        { id: 15, name: 'Книга пророка Огія', label_uk: 'Ог' },
        { id: 16, name: 'Книга пророка Захарія', label_uk: 'Зах' },
        { id: 17, name: 'Книга пророка Малахії', label_uk: 'Мал' }
    ]}
    ]
  },
  { id: 2, category: 'Книги Нового Заповіту', subcategories: [
      { id: 1, name: 'Чотириєвангелія', items: [
        { id: 1, name: 'Євангелія від св. Матвія (Матея, Матфея) (Мф)', label_uk: 'Мт' },
        { id: 2, name: 'Євангелія від св. Марка (Мк)', label_uk: 'Мр' },
        { id: 3, name: 'Євангелія від св. Луки', label_uk: 'Лк' },
        { id: 4, name: 'Євангелія від св. Івана (Іоанна)', label_uk: 'Ів(Ін)' }]
      },
      { id: 2, name: 'Книга історична', items: [
        { id: 1, name: 'Дії святих апостолів', label_uk: 'Дії' }]
      },
      { id: 3, name: 'Послання апостола Павла', items: [
        { id: 1, name: 'Послання св. апостола Павла до римлян', label_uk: 'Рим' },
        { id: 2, name: 'Перше послання св. апостола Павла до коринтян', label_uk: '1Кор' },
        { id: 3, name: 'Друге послання св. апостола Павла до коринтян', label_uk: '2Кор' },
        { id: 4, name: 'Послання св. апостола Павла до галатів', label_uk: 'Гал' },
        { id: 5, name: 'Послання св. апостола Павла до ефесян', label_uk: 'Еф' },
        { id: 6, name: 'Послання св. апостола Павла до филипян', label_uk: 'Фил' },
        { id: 7, name: 'Послання св. апостола Павла до колосян', label_uk: 'Кол' },
        { id: 8, name: 'Перше послання св. апостола Павла до солунян', label_uk: '1Сол' },
        { id: 9, name: 'Друге послання св. апостола Павла до солунян', label_uk: '2Сол' },
        { id: 10, name: 'Перше послання св. апостола Павла до Тимофія', label_uk: '1Тим' },
        { id: 11, name: 'Друге послання св. апостола Павла до Тимофія', label_uk: '2Тим' },
        { id: 12, name: 'Послання св. апостола Павла до Тита', label_uk: 'Тит' },
        { id: 13, name: 'Послання св. апостола Павла до Филимона', label_uk: 'Филим' },
        { id: 14, name: 'Послання до євреїв', label_uk: 'Євр' }]
      },
      { id: 4, name: 'Соборні послання', items: [
        { id: 1, name: 'Соборне послання св. апостола Якова', label_uk: 'Як' },
        { id: 2, name: 'Перше соборне послання св. апостола Петра', label_uk: '1Петр' },
        { id: 3, name: 'Друге соборне послання св. апостола Петра', label_uk: '2Петр' },
        { id: 4, name: 'Перше соборне послання св. апостола Івана', label_uk: '1Ів' },
        { id: 5, name: 'Друге соборне послання св. апостола Івана', label_uk: '2Ів' },
        { id: 6, name: 'Третє соборне послання св. апостола Івана', label_uk: '3Ів' },
        { id: 7, name: 'Соборне послання св. апостола Юди', label_uk: 'Юд' }]
      },
      { id: 5, name: 'Книга пророцька', items: [
        { id: 1, name: 'Обявлення св. Івана Богослова', label_uk: 'Об' }
      ]}
  ]}
]

export default bible;
