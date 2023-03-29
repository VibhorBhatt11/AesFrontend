import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import createRequest from '../pages/createRequest'
import { useRouter } from 'next/router';
// import { CardActionArea } from '@mui/material';

export default function CustomCard({label, summary}) {
  const createRequestPath = "/createRequest"
  const executeSingleRequestPath = "/executeSingleRequest"
  const router = useRouter()
	const routeToCreateRequestPage = (createRequestPath) => router.push(createRequestPath)
  const routeToExecuteSingleRequestPage = (createRequestPath) => router.push(createRequestPath)
  return (
    <Card sx={{ width: '100%' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{bgcolor: "orange", textAlign:  'center'}}>
          {label}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {summary}
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" onClick={() => routeToCreateRequestPage(createRequestPath)}>Create</Button>
      <Button size="small" onClick={() => routeToExecuteSingleRequestPage(executeSingleRequestPath)}>Execute</Button>
      </CardActions>
    </Card>
  );

    // <Card sx={{ maxWidth: 345 }}>
    //     <CardActionArea>
    //         <CardContent>
    //             <Typography gutterBottom variant="h5" component="div" sx={{bgcolor: "orange", textAlign:  'center'}}>
    //             {label}
    //             </Typography>
    //             <Typography variant="body2" color="text.secondary">
    //             {summary}
    //             </Typography>
    //         </CardContent>
    //         <CardActions>
    //             <Button size="small">Create</Button>
    //             <Button size="small">Execute</Button>
    //             <Button size="small">Random</Button>

    //         </CardActions>
    //     </CardActionArea>
    // </Card>
//   );
}
