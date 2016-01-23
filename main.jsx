import React from 'react';
import ReactDOM from 'react-dom';
import Router, { Route } from 'react-router';
import { createHistory } from 'history';
import routes from './routes';

console.log("\n\n\n heyyy main.jsx \n\n\n");

ReactDOM.render(<Router history={createHistory()} routes={routes}/>, document.getElementById('app'));

