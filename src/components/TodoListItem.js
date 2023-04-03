import { ListItem, IconButton, ListItemText } from "@mui/material";
import { Delete } from "@mui/icons-material";

function TodoListItem({ text, idx, onRemove }) {
    return (
        <ListItem>
            <IconButton onClick={onRemove}>
                <Delete />
            </IconButton>
            <ListItemText primary={text} />
        </ListItem>
    );
}

export default TodoListItem;
