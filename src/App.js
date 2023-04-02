import "./App.css";
import TodoList from "./components/TodoList.js";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <TodoList />
        </div>
    );
}

export default App;
