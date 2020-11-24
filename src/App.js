import './App.css';
import Myroute from "./components/myroute";
import Mynavigation from "./components/mynavigation";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Mynavigation/>
            <Myroute/>
        </BrowserRouter>
    </div>
  );
}

export default App;
