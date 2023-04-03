import { TextField, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useRef } from "react";

function ListControl({ handleClick, handleChange, handleKeyDown, textValue }) {
    const inputRef = useRef(null);

    function handleButtonClick() {
        handleClick();
        inputRef.current.focus();
    }

    return (
        <Grid container spacing={2} alignItems="center" sx={{ my: 4 }}>
            <Grid xs={12} sm={12} md={10} pl={6} pr={{ xs: 6, sm: 6, md: 0 }}>
                <TextField
                    id="outlined-start-adornment"
                    type="text"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    label="New item"
                    value={textValue}
                    fullWidth
                    size="large"
                    inputRef={inputRef}
                />
            </Grid>
            <Grid xs={12} sm={12} md={2} textAlign="center">
                <Button
                    variant="contained"
                    size="large"
                    onClick={handleButtonClick}
                    sx={{
                        width: "75%",
                    }}
                >
                    Add
                </Button>
            </Grid>
        </Grid>
    );
}

export default ListControl;
