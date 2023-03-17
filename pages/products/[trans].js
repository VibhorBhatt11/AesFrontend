import React from "react";
import {Box, TextField, Grid} from '@mui/material';
import Transactions from '../../components/Transactions'
import { useRouter } from "next/router";

export default function() {
	const router = useRouter()
	const {trans} = router.query
  return (
		<Box>
			<h1>{trans}</h1>
			
			<Box
				component="form"
				sx={{
					pt: 2,
				}}
				noValidate
				autoComplete="off"
			>
				<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id="standard-required"
						label="Required"
						defaultValue="Hello World"
						variant="standard"
						sx={{width: '100%'}}
					/>
					</Grid>
					<Grid item xs={12} md={6}>
					<TextField
						required
						id="standard-required"
						label="Required"
						defaultValue="Hello World"
						variant="standard"
						sx={{width: '100%'}}
					/>
					</Grid>
					<Grid item xs={12} md={6}>
					<TextField
						required
						id="standard-required"
						label="Required"
						defaultValue="Hello World"
						variant="standard"
						sx={{width: '100%'}}
					/>
					</Grid>
					<Grid item xs={12} md={6}>
					<TextField
						required
						id="standard-required"
						label="Required"
						defaultValue="Hello World"
						variant="standard"
						sx={{width: '100%'}}
					/>
					</Grid>
					
				</Grid>
			</Box>
		</Box>
	)
}