import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navigation from './components/Navigation';
import {CssBaseline} from "@material-ui/core";

ReactDOM.render(
    <div>
        <CssBaseline />
        <Navigation />
         <App/>    
    </div>

, document.getElementById('root'));