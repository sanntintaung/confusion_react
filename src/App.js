import React, { Component} from 'react';
import './App.css';
import MainComponent from "./components/MainComponent";
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {

    render(){
        return (
            <Router>
                <div className="App">
                    <MainComponent />
                </div>
            </Router>
        );
    };
}

export default App;
