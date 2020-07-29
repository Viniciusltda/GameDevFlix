import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import Home from './Pages/Home';
import CadastroVideo from './Pages/Register/Videos';
import CadastroCategorias from './Pages/Register/Categories';


const Error404 = () => (<div><h1>Error 404</h1><h2>Not Found.</h2></div>);

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path='/cadastro/video' component={CadastroVideo}/>

			<Route path='/' component={Home} exact/>

			<Route path="/cadastro/categoria" component={CadastroCategorias}/>

			<Route  component={Error404} />

		</Switch>

	</BrowserRouter>,

	document.getElementById('root')
);
