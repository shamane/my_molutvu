const data = [
  { id: 1, category: 'Захворювання, симптоми захворювання та лікування за допомогою молитви', items: [
    { id: 1, sick: 'Абсцес', 
      sumptomu: [ { id: 1, name: 'концентрація на колишніх образах' } ],
      liku: [
        { id: 1, name: 'Акафіст до Богородиці' }
      ]
    },

    { id: 2, sick: 'Аддісонізм',
      sumptomu: [ { id: 1, name: 'злість на самого себе' }, { id: 2, name: 'емоційний дисбаланас' } ],
      liku: [
        { id: 1, name: 'Акафіст до Богородиці' },
        { id: 2, name: 'Акафіст до Ісуса Христа' }
      ]
    },

    { id: 3, sick: 'Адденоїди - патологічне розростання носоглоткових мигдаликів',
      sumptomu: [ { id: 1, name: 'сварки та скандали у сімї' }, { id: 2, name: 'у дитини відчуття що вона нікому не потрібна' } ],
      liku: [
        { id: 1, name: 'Акафіст до Богородиці' },
        { id: 2, name: 'Вервицю до Всемогутнього Бога' },
        { id: 3, name: 'золоту вервицю до Свяого Духа' },
      ]
    },

    { id: 5, sick: 'Алергічні рекції',
      sumptomu: [ { id: 1, name: 'збалансованість думок, на щось або на кого є алергія' }, { id: 2, name: 'відмова від власних сил' } ],
      liku: [
        { id: 1, name: 'девятниця до св Анни' },
        { id: 2, name: 'повна молитва Оптинських Старців' },
        { id: 3, name: 'вервиця "До ран Христових"' },
        { id: 4, name: 'вервиця "Довіря до Ісуса Христа"' },
        { id: 5, name: 'вервиця "Преображення Ісуса Христа"' },
        { id: 6, name: 'вервиця "До Пресвятої Родини"' },
      ]
    },

  ]},
  { id: 2, category: 'Захворювання, симптоми захворювання та лікування за допомогою молитви 2', items: [] }
]

export default data;
