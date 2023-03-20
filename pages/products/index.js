import React from 'react';
import Button from '@mui/material/Button';
import Transactions from '../../components/Transactions'
import CustomCard from '@/components/CustomCard'
import { Box, Grid } from '@mui/material'

const labels = [
	{
	  label: 270,
	  summary: "hsdkjfhdf jkdhfkjd jkshgfkj"
	},
	{
	  label: 276,
	  summary: "Claim Status"
	},
	{
	  label: 278,
	  summary: "hsdkjfhdf jkdhfkjd jkshgfkj"
	},  
	{
	  label: 275,
	  summary: "hsdkjfhdf jkdhfkjd jkshgfkj"
	},
  
	{
		label: 'Splunk',
		summary: "hsdkjfhdf jkdhfkjd jkshgfkj"
	},
	{
		label: 'Citus',
		summary: "hsdkjfhdf jkdhfkjd jkshgfkj"
	},
  ]
export default function() {
	
	return (
		<>
		  <main>
			<Box sx={{mt: 5}}>
			  <Grid container spacing={2}>
				{
				  labels.map(({label, summary}) => {
					return <Grid item xs={12} md={3}>
					  <CustomCard label={label} summary={summary} /> 
					</Grid>
				  })
				}
			  </Grid>
			</Box>			
		  </main>
		</>
	  )
}