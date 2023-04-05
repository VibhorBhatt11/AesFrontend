import { CssBaseline } from '@mui/material';
import CustomAppBar from '../components/CustomAppBar'
import Box from '@mui/material/Box';
import "../styles/globals.css"

export default function App({ Component, pageProps }) {
  return <>
    <CssBaseline />
    <CustomAppBar />
    <Box>
      <Component {...pageProps} />
    </Box>
  </>
}
