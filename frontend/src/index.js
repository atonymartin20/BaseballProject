import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import axios from 'axios';
import AppProvider from './components/context/appContext.js';

axios.defaults.baseURL = process.env.NODE_ENV === 'production'
? 'https://baseball-project-adm.herokuapp.com/api' 
: 'https://baseball-project-adm.herokuapp.com/api';

ReactDOM.render(
    <AppProvider>
        <Router>
            <App />
        </Router>
    </AppProvider>,
    document.getElementById('root')
);