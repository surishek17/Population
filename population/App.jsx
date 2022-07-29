import "./App.css";
import { Countries } from "./country"

function App() {
    return (
        <div className="App">
            <input type="text" placeholder="Search..." className="search" />
            <ul className="list">
                {Countries.map((user) => (
                    <li className="listitem">{user.state}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;