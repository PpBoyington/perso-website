import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import * as firebase from 'firebase';

import Layout from './js/pages/Layout';

import AboutMe from './js/pages/AboutMe';
import Contact from './js/pages/Contact';
import Home from './js/pages/Home';
import Projects from './js/pages/Projects';

const app = document.getElementById('app');

var config = {
apiKey: "AIzaSyDZCrE8byqknNpG0T6mh7O2BE_XueLdSqM",
authDomain: "meetthecoder-e941e.firebaseapp.com",
databaseURL: "https://meetthecoder-e941e.firebaseio.com",
storageBucket: "meetthecoder-e941e.appspot.com",
messagingSenderId: "224605062547"
};
firebase.initializeApp(config);


ReactDOM.render(
    <Router history={hashHistory}>
	  	<Route path="/" component={Layout}>
	  		<IndexRoute component={Home}></IndexRoute>
	  		<Route path="aboutMe" name="aboutMe"  component={AboutMe}></Route>
	  		<Route path="projects(/:project)" name="projects" component={Projects}></Route>
	  		<Route path="contact" name="contact" component={Contact}></Route>
	  	</Route>
    </Router>,
app);
