import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const MultiActionAreaCard = ({ path, name }) => {
  return (
    <Card sx={{ maxWidth: 345 }} style={{ margin: 'auto' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={path}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Carrinho
        </Button>
      </CardActions> */}
    </Card>
  );
}


export default MultiActionAreaCard;