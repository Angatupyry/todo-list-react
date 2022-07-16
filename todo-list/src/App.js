import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesApp from "./RoutesApp";
import Nav from "./components/Nav/Nav";
import First from "./useEffect/FirstUseEfect";
import CounterWithUseEffect from "./useEffect/Counter";
import CounteIncrement from "./useEffect/CounterIncrement";
import Counter from "./components/Counter/Counter";
import User from "./http/User";

function App() {
  return (
    <div>
      <main>
        <h1>Lista de tareas</h1>
        <First name="you" />
        <User />
        <CounterWithUseEffect />
        <Router>
          <Nav />
          <RoutesApp />
        </Router>
        <footer> Soy un footer pequeñito</footer>
      </main>
    </div>
  );
}

export default App;
