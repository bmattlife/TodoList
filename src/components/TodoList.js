import { useState } from "react";
import ListView from "./ListView";
import ListControl from "./ListControl";

function TodoList() {
    const [textValue, setTextValue] = useState("");
    const [listItems, addListItems] = useState([]);

    function handleChange(event) {
        setTextValue(event.target.value);
    }

    function handleClick() {
        if (textValue.trim()) {
            addListItems((items) => [...items, textValue.trim()]);
            setTextValue("");
        }
    }

    return (
        <div className="TodoList">
            <div className="row">
                <div className="col">
                    <ListControl
                        handleClick={handleClick}
                        handleChange={handleChange}
                        textValue={textValue}
                    />
                </div>
                <div className="col">
                    <ListView list={listItems} />
                </div>
            </div>
        </div>
    );
}

export default TodoList;
