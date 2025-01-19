//Императивный стиль - описывает как должно все работать, в коде описывается реализация
//Декларативный стиль- описывает результат, который хотим получить, запрашиваем результат,
// не интересуясь реализацией

//В коде везде декларативный стиль, так как есть функции
import logo from "./logo.svg";
import "./App.css";

function App() {
	const Year = new Date().getFullYear();
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
					<p>{Year}</p>
				</a>
			</header>
		</div>
	);
}

export default App;
