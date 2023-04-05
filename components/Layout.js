import React from "react";
import Box from "@mui/material/Box"

export default function Layout({children}) {
    return (
        <Box sx={{px: 4}}>
            {children}
        </Box>
    )
}