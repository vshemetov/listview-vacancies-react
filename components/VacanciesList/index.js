import React, {Component} from 'react';
var styles = require('../main.css');

class VacanciesHeader extends React.Component {
  render() {
    return (
      <div className="content-header">
      </div>
    );
  }
}

class VacanciesSearch extends React.Component {
  render() {
    return (
      <div className="content-search">
        <input type="text" className="content-input" placeholder="Найти" />
      </div>
    );
  }
}

class VacanciesFound extends React.Component {
  render() {
    return (
      <div className="content-found">
        <span>Найдена 121 вакансия</span>
      </div>
    );
  }
}

class VacanciesRow extends React.Component {
  render() {
    return (
      <div className="content-row">
        <span>{this.props.spec.period}</span>
        <span className="position">{this.props.spec.position}</span>
        <span className="found-count">{this.props.spec.foundCount}</span>
        <span>{this.props.spec.company}</span>
      </div>
    );
  }
}

export default class VacanciesList extends Component {
  render() {
    const vacanciesNodes = this.props.vacancies.map((jobItemData) => {
      return (<VacanciesRow spec={jobItemData} />);
    });

    return (
      <div className="content">
        <VacanciesHeader />
        <VacanciesSearch />
        <VacanciesFound />
        {vacanciesNodes}
      </div>
    );
  }
}
