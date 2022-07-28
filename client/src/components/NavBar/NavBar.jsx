import React from "react";
import {AppBar, Button, Toolbar, Typography }from "@mui/material"
import { red } from "@mui/material/colors";
import SearchBar from "../SearchBar/SearchBar";

function NavBar(setEcho) {

    return (
        <AppBar position="static" sx={{ backgroundColor: red[500]}}>
            <Toolbar >
                <Typography variant="h6" sx={{
                    display: "flex", 
                    justifyContent: "space-between", 
                    flexDirection: "row", 
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginLeft: "20rem",
                
                }}>
                    <SearchBar setEcho={setEcho}/>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;