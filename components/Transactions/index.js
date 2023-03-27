import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

const TRANS = [
	{label: '270 - Eligibility', path: '/products/270'},
	{label: '276', path: '/products/276' },
	// {label: '278', path: '/products/278' }
]

export default function Transactions() {
	const router = useRouter()
	const routeToPage = (path) => router.push(path)
	return  (
		<Box sx={{}}>
		{
			TRANS.map(({label, path}, index) => (
				<Button variant="contained" sx={{mr: 1}} onClick={() => routeToPage(path)}>{label}</Button>
			))
		}
		</Box>
	)
}