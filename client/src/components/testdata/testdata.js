import React, { Component } from 'react';
import './testdata.css';

class Testdata extends Component {
    constructor() {
        super();
        this.state = {
            testdataArray: []
        };
    }
    componentDidMount() {
        fetch('/api')
          .then(res => res.json())
          .then(testdataArray => this.setState({testdataArray}, () => console.log('testdataArray fetched...', testdataArray)));
      }
    render() {
     return (
        <div className="App">
        <h1>Test data</h1>
        <ul>
            {this.state.testdataArray.map(testdataArray =>
            <li> key={testdataArray.id}>{ testdataArray.firstName}</li>)}
        </ul>
        </div>
        );
    }
}

export default Testdata;