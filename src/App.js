//Императивный стиль - описывает как должно все работать, в коде описывается реализация
//Декларативный стиль- описывает результат, который хотим получить, запрашиваем результат,
// не интересуясь реализацией

//В коде везде декларативный стиль, так как есть функции
import logo from "./logo.svg";
import "./App.css";
import React from "react";
// function App() {
// 	const Year = new Date().getFullYear();
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 					<p>{Year}</p>
// 				</a>
// 			</header>
// 		</div>
// 	);
// }

//Используем только JavaScript
function App() {
	const Year = new Date().getFullYear();
	return React.createElement(
		"div",
		{ className: "App" },
		React.createElement(
			"header",
			{ className: "App-header" },
			React.createElement("img", {
				src: logo,
				className: "App-logo",
				alt: "logo",
			}),
			React.createElement(
				"p",
				null,
				"Edit ",
				React.createElement("code", null, "src/App.js"),
				" and save to reload."
			),
			React.createElement(
				"a",
				{
					className: "App-link",
					href: "https://reactjs.org",
					target: "_blank",
					rel: "noopener noreferrer",
				},
				"Learn React",
				React.createElement("p", null, Year)
			)
		)
	);
}

export default App;
