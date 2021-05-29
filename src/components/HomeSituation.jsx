import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomeSituation.css';

class HomeSituation extends Component {
  render() {
    return (
      <div className="HomeSituation">
        <h1>Home Situation</h1>
        <span>Do you own or rent the place where you live? 🏡</span>
        <form>
          <div className="checkbox">
            <label htmlFor="own">own</label>
            <input name="own" type="checkbox" value="asd" />
          </div>
          <div className="checkbox">
            <label htmlFor="rent">rent</label>
            <input name="rent" type="checkbox" value="asd" />
          </div>
          <Link to="/questionnaire/employment-status">
            <button>Next</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default HomeSituation;
