import { useState } from "react";
import { createTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ListView from "./ListView";
import ListControl from "./ListControl";
import Grid from "@mui/material/Unstable_Grid2";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";

function TodoList() {
    const [textValue, setTextValue] = useState("");
    const [listItems, setListItems] = useState([]);

    function handleChange(event) {
        setTextValue(event.target.value);
    }

    function handleClick() {
        if (textValue.trim()) {
            setListItems((items) => [...items, textValue.trim()]);
            setTextValue("");
        }
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            handleClick();
        }
    }

    function handleRemove(idx) {
        setListItems((items) => {
            const newItems = [...items];
            newItems.splice(idx, 1);
            return newItems;
        });
    }

    return (
        <Box>
            <ListControl
                handleClick={handleClick}
                handleChange={handleChange}
                handleKeyDown={handleKeyDown}
                textValue={textValue}
            />
            <ListView list={listItems} handleRemove={handleRemove} />
        </Box>
    );
}

export default TodoList;
