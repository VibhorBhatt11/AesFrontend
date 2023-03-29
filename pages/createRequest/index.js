import React from "react";
import {Box, TextField, Grid, Button} from '@mui/material';
import Transactions from '../../components/Transactions'
import { useRouter } from "next/router";
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import DatePicker from '../../components/DatePicker'
import SubmitButton from '../../components/SubmitButton'




export default function() {
	const router = useRouter()
	// const {trans} = router.query

  return (
		<Box>           
			<h1> Create 276 X12</h1>
			
			<Box
				component="form"
				sx={{
					pt: 2,
				}}
				noValidate
				autoComplete="off"
			>
				<Grid container rowSpacing={0.5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="standard-size-small"
                            size = "small"
                            label="Patient First Name"
                            defaultValue=""
                            variant="standard"                           
                            sx={{width: '100%'}}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="standard-size-small"
                            size = "small"
                            label="Patient Last Name"
                            defaultValue=""
                            variant="standard"
                            sx={{width: '100%'}}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="standard-size-small"
                            size = "small"
                            label="Subscriber ID"
                            defaultValue=""
                            variant="standard"
                            sx={{width: '100%'}}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="standard-size-small"
                            size = "small"
                            label="Provider ID"
                            defaultValue=""
                            variant="standard"
                            sx={{width: '100%'}}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="standard-size-small"
                            size = "small"
                            label="First DOS"
                            defaultValue=""
                            variant="standard"
                            sx={{
                                width: '100%',
                                // padding: '5px 10px',
                                // borderWidth: '1px'
                            }}
                        />
                        <DatePicker> </DatePicker>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="standard-size-small"
                            size = "small"
                            label="Last DOS"
                            defaultValue=""
                            variant="standard"
                            sx={{width: '100%'}}
                        />
                        <DatePicker> </DatePicker>
                    </Grid>
                    <Grid item xs={12} md={6}>
                            <TextField
                                required
                                id="standard-size-small"
                                size = "small"
                                label="Date Of Birth"
                                defaultValue=""
                                variant="standard"
                                sx={{width: '100%'}}
                            />
                            <DatePicker> </DatePicker>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            // required
                            id="standard-size-small"
                            size = "small"
                            label="Claim Number"
                            defaultValue=""
                            variant="standard"
                            sx={{width: '100%'}}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            // required
                            id="standard-size-small"
                            size = "small"
                            label="Total Charge Amount"
                            defaultValue=""
                            variant="standard"
                            sx={{width: '100%'}}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            // required
                            id="standard-size-small"
                            size = "small"
                            label="Policy Number"
                            defaultValue=""
                            variant="standard"
                            sx={{width: '100%'}}
                        />
                    </Grid>
                    <Grid item xs={16} md={25}>
                        {/* <Button variant="contained" color="primary" size="large" textAlign="center">Submit</Button> */}
                        <SubmitButton></SubmitButton>
                    </Grid>
				</Grid>
			</Box>
		</Box>
	)
}