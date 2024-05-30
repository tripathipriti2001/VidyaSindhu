import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Bhaktamar from '../images/bhaktamar.jpeg';
import './static/Cards.css';

export default function Cards() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="330"
          image={Bhaktamar}
          alt="MantungAcharya"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bhaktamar Stotra
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Param Vandaniya Acharya Mantung ko jab 48 taalo me bediyo se bandh 
            kar kaid kar diya gaya tha tab Adinath stotra bhaktamar ki rachna 
            hui thi. Isme 48 kaavya hain aur har kavya ke sath muniraj jis 
            kothri me kaid the uske taale tutte chale gaye.
            Bhaktamar ki mahima!! 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}





// import React from 'react'
// import Cards from '@mui/material/Card';
// import CardContent from '@mui/material/CardComponent';


// function Cards() {
//   return (
//     <>
//         {/* <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.indiamart.com%2Fproddetail%2Fgold-bhaktamar-stotra-23007733973.html&psig=AOvVaw2o_zWfNJqx9x3905q1FApZ&ust=1708608123671000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMjlxLTDvIQDFQAAAAAdAAAAABAE" alt='Mantungacharya'></img>
//         <h3>Bhaktamar Maha Stotra Hindi</h3>
//         <a href='/'>Stotra</a> */}
//     </>
//   )
// }

// export default Cards