import { Route, Switch } from 'react-router-dom';
import Questionnaire from './components/questionnaire';
import YearOfBirth from './components/YearOfBirth';
import FinancialRes from './components/financialRes';
import HomeSituation from './components/HomeSituation';
import EmploymentStatus from './components/EmploymentStatus';
import Income from './components/Income';
import './App.css';

function App() {
  return (
    <div className="page-container">
      <div className="App">
        <h1>Questionnaire</h1>
        <Switch>
          <Route exact path="/" component={Questionnaire} />
          <Route exact path="/questionnaire" component={Questionnaire} />
          <Route
            exact
            path="/questionnaire/year-of-birth"
            component={YearOfBirth}
          />
          <Route
            exact
            path="/questionnaire/financial-responsibilities"
            component={FinancialRes}
          />
          <Route
            exact
            path="/questionnaire/home-situation"
            component={HomeSituation}
          />
          <Route
            exact
            path="/questionnaire/employment-status"
            component={EmploymentStatus}
          />
          <Route exact path="/questionnaire/income" component={Income} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
