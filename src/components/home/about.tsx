import React, { useState, useEffect, FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { data } from './feature.data'
// import {Fade} from 'react-reveal/Fade';
// import {ScrollAnimation} from 'react-animate-on-scroll';

const About: FC = () => {
  return (
    <Box id="about" sx={{ py: { xs: 10, md: 14 } }} mt={-10}>
      {/* <ScrollAnimation animateIn="fadeIn"> */}
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ width: { xs: '150%', md: '180%' }, marginLeft: '-150px', marginTop: '-190px' }}>
              <Image src="/images/avatars/4.svg" width={720} height={760} quality={97} alt="Testimonial img" />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              // component="h2"
              sx={{
                position: 'relative',
                fontSize: { xs: 40, md: 50 },
                ml: { xs: 0, md: 4 },
                // mt: 2,
                mb: 3,
                lineHeight: 0.3,
                fontWeight: 'bold',
                color: 'primary.main',
                // textAlign: "right",
              }}
            >
              About{' '}
              <Typography
                component="mark"
                sx={{
                  position: 'relative',
                  color: '#1F59F0',
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  backgroundColor: 'unset',
                }}
              >
                Us
              </Typography>
            </Typography>

            <Typography sx={{ color: 'black', mb: 2, ml: { xs: 0, md: 4 } }}>
              At Algorooms, we are dedicated to revolutionizing the way businesses operate by providing
              cutting-edge automation technologies and services. With a relentless commitment to innovation, efficiency,
              and excellence, we have positioned ourselves as a leading force in the ever-evolving world of automation.
              <br></br>
              <br></br>
              Our mission is to empower businesses of all sizes and industries with the tools they need to thrive in the
              digital age. We believe that automation is the key to unlocking productivity, improving decision-making,
              and achieving sustainable growth. Our solutions are designed to help you save time, reduce costs, and
              increase your competitive advantage. Our Services for Automation Companies are tailored to your
              specific needs, ensuring your business can make the most of your automation investments.
            </Typography>

            {/* <Grid container spacing={2} sx={{ ml: { xs: -2, md: 2 } }}>
              {data.map(({ title, description, icon }, index) => (
                <Grid key={String(index)} item xs={12} md={6}>
                  <Box sx={{ px: 0, py: 1.5, boxShadow: 2, borderRadius: 4, display: 'flex', alignItems: 'center' }}>
                    <Box
                      sx={{
                        mr: 1,
                        borderRadius: '50%',
                        height: 36,
                        width: 36,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'primary.main',
                        '& svg': {
                          fontSize: 20,
                        },
                      }}
                      // xs={10}
                    >
                      {icon}
                    </Box>
                    <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                      <Typography variant="h6" sx={{ fontSize: '1rem', mb: 1, color: 'primary.main' }}>
                        {title}
                      </Typography>
                      <Typography sx={{ lineHeight: 1.3, color: 'black' }} variant="subtitle1">
                        {description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid> */}
          </Grid>
        </Grid>
      </Container>
      {/* </ScrollAnimation> */}
    </Box>
  )
}

export default About
