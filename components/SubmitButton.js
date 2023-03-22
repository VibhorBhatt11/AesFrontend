import { Button } from "@mui/material"

export default function CustomCard({label, summary}) {
    return (
        <Button sx={{width:'20%'}} variant="contained" color="primary" size="small" textAlign="center">Submit</Button>
    )
}
