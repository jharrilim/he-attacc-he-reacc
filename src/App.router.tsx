import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home } from './components/home/Home';

export const AppRouter = () => (
    <Router>
        <Route path="/" exact component={Home} />
    </Router>
);
