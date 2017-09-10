import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import EmployeesPage from './components/employees/EmployeesPage';
import AboutPage from './components/about/AboutPage';
import EmployeePage from './components/employees/EmployeePage';
import NewEmployeePage from './components/employees/NewEmployeePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/employees" component={EmployeesPage} />
      <Route path="/employees/new" component={NewEmployeePage} />
      <Route path="/employees/:id" component={EmployeePage} />
      <Route path="/about" component={AboutPage} />
  </Route>
);

