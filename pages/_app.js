import { CssBaseline } from '@mui/material';
import CustomAppBar from '../components/CustomAppBar'
import Box from '@mui/material/Box';

export default function App({ Component, pageProps }) {
  return <>
    <CssBaseline />
    <CustomAppBar />
    <Box sx={{px: 4}}>
      <Component {...pageProps} />
    </Box>
  </>
}
