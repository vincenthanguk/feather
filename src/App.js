import { Route, Switch } from 'react-router-dom';
import Questionnaire from './components/questionnaire';
import './App.css';

function App() {
  return (
    <div className="page-container">
      <div className="App">
        <h1>Project Feather</h1>
        <Switch>
          <Route exact path="/" component={Questionnaire} />
          <Route exact path="/questionnaire" component={Questionnaire} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
