import React from 'react';
import { Typography, Box, Card, CardContent, Grid } from '@mui/material';
import { Avatar } from '@mui/material';
import lashes from '../Assets/lashes.jpg';

import { styled } from '@mui/material/styles'

const useStyles = styled((theme) => ({
  title: {
    color: "#FFD700",
    fontFamily: 'Solitreo', fontSize: 30,
  },
  primaryAction: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    }
  },
  secondaryAction: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    }
  }
}));

export default function Testimonial (){
  const classes = useStyles();

  const reviews = [
    {
      id: 1,
      name: 'Karl Brighton',
      title: 'Whispy',
      statement:
        'The team  vfsv vf nbg dbgdfbg bgb fgb d vfv brtbr tgfbdfgbgfdbgfb bebgfb perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.',
      image_url:{lashes},
      position: 'Software Engineer at Kadex',
    },
    {
      id: 2,
      name: 'Krishna Bells',
      title: 'Natural',
      statement:
        'We needed vfv bfbbssb bsfbfb bfsbgb gbd to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!',
      image_url:
        'https://sweta-myteam-website-fm.netlify.app/static/media/avatar-aiysha.e119a0c1.jpg',
      position: 'Product Manager at Google',
    },
    {
      id: 3,
      name: 'Ben Spiff',
      title: 'Full',
      statement:
        'Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.',
      image_url:
        'https://sweta-myteam-website-fm.netlify.app/static/media/avatar-arthur.098c2e26.jpg',
      position: 'Founder of Crypto',
    },
    {
        id: 3,
        name: 'Ben Spiff',
        title: 'Inserts',
        statement:
          'Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.',
        image_url:
          'https://sweta-myteam-website-fm.netlify.app/static/media/avatar-arthur.098c2e26.jpg',
        position: 'Founder of Crypto',
      },
      {
        id: 1,
        name: 'Karl Brighton',
        title: 'Whispy',
        statement:
          'The team  vfsv vf nbg dbgdfbg bgb fgb d vfv brtbr tgfbdfgbgfdbgfb bebgfb perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.',
        image_url:{lashes},
        position: 'Software Engineer at Kadex',
      },
      {
        id: 1,
        name: 'Karl Brighton',
        title: 'Whispy',
        statement:
          'The team  vfsv vf nbg dbgdfbg bgb fgb d vfv brtbr tgfbdfgbgfdbgfb bebgfb perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.',
        image_url:{lashes},
        position: 'Software Engineer at Kadex',
      },
  ];
  return (
    <Box
      sx={{
        flexGrow: 1,
        pt:8,
        pl: 15, 
        pr:15,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '300px',
      }}
    >
        <Typography color="#000000"variant="h2" component="span">Full-Set Lashes </Typography>
      <Grid container spacing={2} pt={5}>
        {reviews.map((review) => (
          <Grid  item sm={12} md={4} key={review.id} sx={{p: 3}}>
            <Box >
              {/* <CardContent> */}
           
              <Typography 
              sx={{   
                   color: "#000000",
                   fontFamily: 'Solitreo', fontSize: 30, fontWeight: 'Bold'
                  }}
                >{review.title} </Typography>

                <Box>
                <img src={lashes} alt="React Image" width= "280" />

                  {/* "{review.statement}" */}
                </Box>
                {/* <Box sx={{ display: 'flex' }}> */}
                  {/* <Avatar
                    src={review.image_url}
                    size="large"
                  /> */}
                  {/* <Box> */}
                    {/* <Typography>{review.name}</Typography>
                    <Typography>
                      {review.position}
                    </Typography> */}
                  {/* </Box> */}
                {/* </Box> */}
              {/* </CardContent> */}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

