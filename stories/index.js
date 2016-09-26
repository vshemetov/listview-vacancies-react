import React from 'react';
import { storiesOf } from '@kadira/storybook';
import VacanciesList from '../components/VacanciesList';

storiesOf('Vacancies list', module)
  .add('mobile view', () => (
    <VacanciesList />
  ));
