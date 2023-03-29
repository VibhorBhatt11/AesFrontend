import React from 'react';
import Button from '@mui/material/Button';
import Transactions from '../../components/Transactions'
import CustomCard from '../../components/CustomCard'
import { Box, colors, Grid } from '@mui/material'

const labels = [
	{
	  label: 270,
	  summary: "Member Eligibility & Benefits"
	},
	{
	  label: 276,
	  summary: "Claim Status"
	},
	{
	  label: 278,
	  summary: "Claims Enquiry"
	},  
	{
	  label: 275,
	  summary: "EDI Attachments"
	},
  
	{
		label: 'Splunk',
		summary: "Monitoring"
	},
	{
		label: 'Citus',
		summary: "PostgreSql"
	},
	{
		label: 'Chat with EDI',
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