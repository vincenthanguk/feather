import { Route, Switch } from 'react-router-dom';
import Questionnaire from './components/Questionnaire';
import YearOfBirth from './components/YearOfBirth';
import FinancialRes from './components/FinancialRes';
import HomeSituation from './components/HomeSituation';
import EmploymentStatus from './components/EmploymentStatus';
import Income from './components/Income';
import Recommendations from './components/Recommendations';
import './App.css';

function App() {
  return (
    <div className="page-container">
      <div className="App">
        <Questionnaire />
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
          <Route exact path="/recommendations" component={Recommendations} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
