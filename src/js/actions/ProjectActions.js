import Dispatcher from '../Dispatcher';
import axios from 'axios';



export function createProject(title,description) {
	Dispatcher.dispatch({
		type: 'CREATE_PROJECT',
		title,
		description,
	});
}

export function deleteProject(title) {
	Dispatcher.dispatch({
		type: 'DELETE_PROJECT',
		title,
	});
}

export function reloadProjects() {
	//axios.get("https://someURL.com").then(data) => {
	//console.log(data);
    axios.defaults.baseURL = 'localhost:3000';
	Dispatcher.dispatch({type: 'FETCH_PROJECTS'});
	axios.get("/getProjects").then( data => {
		Dispatcher.dispatch({
			type: 'RECEIVED_PROJECTS', 
			projects : data,
		});
	}).catch(error => console.log(error));
}