import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import lashes from '../Assets/lashes.jpg';
import ArtemisLash from '../Assets/ArtemisLash.jpg';
import { Grid, Divider, Container } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Whispy',
    imgPath: ArtemisLash
  },
  {
    label: 'Fluffy',
    imgPath: ArtemisLash
  },
  {
    label: 'Natural',
    imgPath: ArtemisLash
  },
  {
    label: 'Flutter',
    imgPath: ArtemisLash
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    // flexGrow: 1,
    // padding: 8,
    // alignItems: 'center',
    // justifyContent: 'center',
    // minHeight: '400px',
    // backgroundColor: '#545454', opacity: '0.7'

   
    <Box item  sx={{
        display: {xs:12, sm:12, md:6, lg: "flex"},
        flexDirection: 'row',
        flexGrow:1,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight:"45vh", 
        maxWidth: '100%',
        ml: 15, mr:15, 
        backgroundColor: "#FFF",
        mt: 10
        }}>
      <Grid  
      sx={{
        display: 'flex',
        flexDirection:'column',
        flexGrow:1,
        alignItems:'stretch',
        pb:15, 
        backgroundColor: "#FFF",
        }}
      >
      <Grid sx={{ flexDirection:"column",  display: {xs:"none",sm:"flex", md:"flex", lg:"flex"}}}>
      <Typography component="h1" variant="h2" color="#D4AF37"   
        sx={{  alignItems:"center", justifyContent:"center",
        fontWeight: 'Bold', 
        fontFamily: 'Solitreo ', fontSize: 45, pt: 1, }} >
        Styles
      </Typography>
       <Typography variant="caption" color="#D4AF37" 
        sx={{ 
        pt: 1, fontSize: 20, alignItems:"center", justifyContent:"center"}} >             
            Enhance your natural beauty or <br/> transform your look for any occassion
      </Typography> 
      </Grid> 
      </Grid>
      <Grid Container md={12}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow:1,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight:"45vh", maxWidth: 500,
        backgroundColor: "#FFF",
        }}
      >
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 80,
          bgcolor: 'background.default',
        }}
      > 
      <Typography color='#D4AF37' gutterBottom={true} variant="h4" >{images[activeStep].label}</Typography>
       </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
            <Container>
            <Box
                component="img"
                sx={{
                  height: 355,
                  display: 'flex',
                  maxWidth: 700,
                  overflow: 'hidden',
                  width: '100%',
                  borderRadius: 1,
                }}
                src={step.imgPath}
                alt={step.label}
              />
              </Container>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      {/* <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      /> */}
      </Grid>
    
    </Box>
  );
}

export default SwipeableTextMobileStepper;