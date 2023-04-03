import {
    IconButton,
    List,
    ListItem as MuiListItem,
    ListItemText,
    Typography,
} from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";

function ListItem({ text, key, onRemove }) {
    return (
        <MuiListItem key={key}>
            <IconButton onClick={onRemove}>
                <DeleteIcon />
            </IconButton>
            <ListItemText primary={text} />
        </MuiListItem>
    );
}

function ListView({ list, handleRemove }) {
    return (
        <>
            {list.length === 0 ? (
                <Typography pl={6}>Add an item to get started!</Typography>
            ) : (
                <List dense>
                    {list.map((item, idx) => (
                        <ListItem
                            text={item}
                            key={idx}
                            onRemove={() => handleRemove(idx)}
                        />
                    ))}
                </List>
            )}
        </>
    );
}

export default ListView;
