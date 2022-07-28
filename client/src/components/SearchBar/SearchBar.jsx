import React, { useState } from "react";
import { Button, InputBase } from '@mui/material';

function SearchBar(setEcho) {
    const [text, setText] = useState("");

    // take the text from the input and set it to the state
    function handleInputText(e) {
        setText(e.target.value);
    }

    // when the user clicks the button, set the text to the state and send it to the parent component
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