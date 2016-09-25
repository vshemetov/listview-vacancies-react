import React from 'react';
import { storiesOf } from '@kadira/storybook';
import VacanciesList from '../components/VacanciesList';

const vacancies_ = [
  {
    period: 'Сентябрь 2016 - январь 2017',
    position: 'Оператор',
    foundCount: '+4 вакансии',
    company: 'Студия Олега Ивановича'
  },
  {
    period: '30.09.2019 – 20.11.2016',
    position: 'Оператор',
    foundCount: '',
    company: 'Продюсерский центр «Концерн»'
  },
  {
    period: 'полная занятость',
    position: 'Старший оператор',
    foundCount: '',
    company: 'PC Видео Дизайн'
  },
  {
    period: 'полная занятость',
    position: 'Оператор',
    foundCount: '',
    company: 'Свободная Студия'
  }
];

storiesOf('Vacancies list', module)
  .add('mobile view', () => (
    <VacanciesList vacancies={vacancies_}/>
  ));
