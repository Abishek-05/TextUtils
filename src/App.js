import React, { useState } from 'react';
import './App.css';
import './darkMode.css'
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';

function App() 
{
	const [mode, setMode] = useState("light"); //Light/Dark mode
	const [alert, setAlert] = useState(null);

	function showAlert(message, type)
	{
		setAlert(
			{
				msg : message,
				type : type
			}
		)
		setTimeout(() => {
			setAlert(null);
		}, 2000);
	}
	function handleToggleMode()
	{
		if(mode === "light")
		{
			setMode("dark");
			document.body.style.backgroundColor = "#223344";
			showAlert("Dark mode enabled", "success");
		}
		else
		{
			setMode("light");
			document.body.style.backgroundColor = "white";
			showAlert("Light mode enabled", "success");
		}
	}

	return (
		<Router>

			<Navbar title = "TextUtils" aboutText = "AboutUs" mode = {mode} toggleMode = {handleToggleMode}></Navbar>
			<Alert alert = {alert}></Alert>
			
			<Routes>

				<Route path="/" element = { <TextArea title = "Perform operations on your text" mode = {mode} showAlert = {showAlert}></TextArea> }></Route>

				<Route path = "/about" element = {<About mode = {mode}></About>}></Route>
			</Routes>

		</Router>
	);
}

export default App;
