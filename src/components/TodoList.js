import { useState } from "react";
import Box from "@mui/material/Box";
import ListView from "./ListView";
import ListControl from "./ListControl";
import { useLocalStorage } from "../util";

function TodoList() {
    const [textValue, setTextValue] = useState("");
    const [listItems, setListItems] = useLocalStorage("listItems", []);

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
