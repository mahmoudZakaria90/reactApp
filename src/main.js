import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';


import Header from './components/header';
import Footer from './components/footer';
import Layout from './components/layout';

const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<Route path="header" component={Header}></Route>
			<Route path="footer" component={Footer}></Route>
		</Route>
	</Router>
, app)

