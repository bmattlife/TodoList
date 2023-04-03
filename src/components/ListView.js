import { List, Typography, Box } from "@mui/material";

import TodoListItem from "./TodoListItem";

function ListView({ list, handleRemove }) {
    return (
        <Box>
            {list.length === 0 ? (
                <Typography pl={6}>Add an item to get started!</Typography>
            ) : (
                <List dense>
                    {list.map((item, idx) => (
                        <TodoListItem
                            text={item}
                            key={idx}
                            idx={idx}
                            onRemove={() => handleRemove(idx)}
                        />
                    ))}
                </List>
            )}
        </Box>
    );
}

export default ListView;
