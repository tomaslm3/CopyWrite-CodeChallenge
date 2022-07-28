import React, { useState } from "react";
import { Button, InputBase } from '@mui/material';

function SearchBar(setEcho) {
    const [text, setText] = useState("");

    function handleInputText(e) {
        setText(e.target.value);
    }


    function handleSubmit(e) {
        setEcho.setEcho.setEcho(text);
        
    }

    return (
        <div>
            <InputBase
                placeholder="Insert Text"
                inputProps={{ 'aria-label': 'search' }}
                sx={{
                    backgroundColor: "white",
                    padding: "10px",
                    width: "30rem",
                    height: "2rem",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "black",
                    borderRadius: "5px",
            }}
            onChange={(e) => handleInputText(e)}
            />

            <Button variant="contained" 
                sx={{
                    backgroundColor: "blue",
                    marginLeft: "1rem",
                    }}
                onClick={(e)=>handleSubmit(e)}
                > 
                Send 
            </Button>

        </div>
    )
}

export default SearchBar;