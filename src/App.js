import React, { Component} from 'react';
import './App.css';
import MainComponent from "./components/MainComponent";
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {configStore} from "./redux/configStore";

const store = configStore();
class App extends Component {

    render(){
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <MainComponent />
                    </div>
                </Router>
            </Provider>

        );
    };
}

export default App;
