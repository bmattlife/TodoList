import * as React from "react";
import "./App.css";
import TodoList from "./components/TodoList.js";
import Header from "./components/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        grey: {
            main: "#bbdefb",
            light: "#e3f2fd",
            contrastText: "#fff",
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <main className="App">
                <Header />
                <TodoList />
            </main>
        </ThemeProvider>
    );
}

export default App;
