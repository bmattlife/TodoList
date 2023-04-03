import * as React from "react";
import "./App.css";
import TodoList from "./components/TodoList.js";
import Header from "./components/Header";

function App() {
    return (
        <main className="App">
            <Header />
            <TodoList />
        </main>
    );
}

export default App;
