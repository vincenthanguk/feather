import React, { useState } from 'react';
import Questionnaire from './components/Questionnaire';
import { Route, Switch } from 'react-router-dom';
import YearOfBirth from './components/YearOfBirth';
import FinancialRes from './components/FinancialRes';
import HomeSituation from './components/HomeSituation';
import EmploymentStatus from './components/EmploymentStatus';
import Income from './components/Income';
import Recommendations from './components/Recommendations';

import './App.css';

function App() {
  const initialQuestionnaire = {
    yearOfBirth: '',
    financialRes: [
      { value: 'child', isChecked: true },
      { value: 'spouse', isChecked: false },
    ],
    homeSituation: '',
    employmentStatus: '',
    income: '',
  };

  const [questionnaire, setQuestionnaire] = useState(initialQuestionnaire);

  const setQuestionnaireItem = (item, value) => {
    setQuestionnaire({ ...questionnaire, [item]: value });
  };

  return (
    <div className="page-container">
      <div className="App">
        <h1>Your Insurance Questionnaire</h1>
        <Switch>
          <Route exact path="/" component={Questionnaire} />
          <Route exact path="/questionnaire" component={Questionnaire} />
          <Route exact path="/questionnaire/year-of-birth">
            <YearOfBirth handleSubmit={setQuestionnaireItem} />
          </Route>
          <Route exact path="/questionnaire/financial-responsibilities">
            <FinancialRes handleSubmit={setQuestionnaireItem} />
          </Route>
          <Route exact path="/questionnaire/home-situation">
            <HomeSituation handleSubmit={setQuestionnaireItem} />
          </Route>
          <Route exact path="/questionnaire/employment-status">
            <EmploymentStatus handleSubmit={setQuestionnaireItem} />
          </Route>
          <Route exact path="/questionnaire/income">
            <Income handleSubmit={setQuestionnaireItem} />
          </Route>

          <Route exact path="/recommendations">
            <Recommendations results={questionnaire} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
