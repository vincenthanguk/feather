import { Route, Switch } from 'react-router-dom';
import Questionnaire from './components/questionnaire';
import YearOfBirth from './components/YearOfBirth';
import FinancialRes from './components/financialRes';
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
        </Switch>
      </div>
    </div>
  );
}

export default App;
