import { List, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import TodoListItem from "./TodoListItem";

function ListView({ list, handleRemove }) {
    return (
        <Grid container>
            <Grid xs={0} sm={0} md={3}></Grid>
            <Grid xs={12} sm={12} md={6} px={{ xs: 3, sm: 6, md: 0 }}>
                {list.length === 0 ? (
                    <Typography pl={6} align="center">
                        Add an item to get started!
                    </Typography>
                ) : (
                    <List sx={{ py: 0 }}>
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
            </Grid>
            <Grid xs={0} sm={0} md={3}></Grid>
        </Grid>
    );
}

export default ListView;
