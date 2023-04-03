import { ListItem, Icon, IconButton, ListItemText } from "@mui/material";
import { Circle, Delete } from "@mui/icons-material";

function TodoListItem({ text, idx, onRemove }) {
    const primaryColor = idx % 2 === 0 ? "grey.main" : "grey.light";
    return (
        <ListItem sx={{ bgcolor: primaryColor }}>
            <Icon sx={{ display: "flex", alignItems: "center" }}>
                <Circle
                    sx={{
                        color: "#52616c",
                        fontSize: "0.8rem",
                    }}
                />
            </Icon>
            <ListItemText primary={text} />
            <IconButton onClick={onRemove}>
                <Delete />
            </IconButton>
        </ListItem>
    );
}

export default TodoListItem;
