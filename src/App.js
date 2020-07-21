import React, { Component } from 'react';
import './App.css';
import LoanForm from './components/LoanForm';
import ShapCard from './components/ShapCard';

import store from './store';
import { setData, setJsonResponse } from './actionCreators'


class App extends Component {

  constructor() {
    super();
    this.state = {
      json_response: null,
      data: []
    }

    this.parseJsonResponse = this.parseJsonResponse.bind(this);

    store.subscribe(() => {
      this.setState({
        json_response: store.getState().json_response,
        data: store.getState().data
      })
    });
  }

  parseJsonResponse(json_response) {
    if(json_response!==""){
      let temp = JSON.parse(json_response);
      store.dispatch(setJsonResponse(json_response));
      store.dispatch(setData(temp.data));
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Machine Learning Explainability - Shap Values Visualization
          </p>
        </header>
        <div className="container">
          <div className="row">
              <div className="col s12 m12 l12">
                  <LoanForm onParseJsonResponse={ this.parseJsonResponse }/>
              </div>
              <div className="col s12 m12 l12">
                {
                  this.state.data.map((explain, index) => {
                    return(
                      <ShapCard 
                        explain={ explain } 
                        index={ index } 
                        key={ index } 
                        uuid= { Date.now().toString()+index }
                      />
                    )
                  })
                }
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
