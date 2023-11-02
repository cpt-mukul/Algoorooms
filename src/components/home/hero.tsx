import React, { FC, Component }from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '@/components/styled-button'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import {Link as ScrollLink} from "react-scroll"


interface Exp {
  label: string
  value: string
}
interface ExpItemProps {
  item: Exp
}

const exps: Array<Exp> = [
  {
    label: 'Students',
    value: '10K+',
  },
  {
    label: 'Quality Course',
    value: '20+',
  },
  {
    label: 'Experience Mentors',
    value: '10+',
  },
]


const ExpItem: FC<ExpItemProps> = ({ item }) => {
  const { value, label } = item
  
  return (
    
    <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 0 } }}>
      <Typography
        sx={{ color: 'secondary.main', mb: { xs: 1, md: 2 }, fontSize: { xs: 34, md: 44 }, fontWeight: 'bold' }}
      >
        {value}
      </Typography>
      <Typography color="text.secondary" variant="h5">
        {label}
      </Typography>
    </Box>
  )
}




const HomeHero: FC = () => {
  return (
    
    <Box id="hero" sx={{ position: 'relative', pb: { xs: 8, md: 10 }, overflow:"hidden" }}>
      <Container>
        
        <Grid container spacing={1} sx={{ flexDirection: { xs: 'column', md: 'unset' } }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ mb: 5 }}>
                <Typography
                  component="h2"
                  sx={{
                    position: 'relative',
                    fontSize: { xs: 40, md: 72 },
                    letterSpacing: 1,
                    fontWeight: 'bolder',
                    lineHeight: 0.5,
                    color:"#1F59F0",
                    // fontFamily:"Sedgwick Ave Display",
                  }}
                >
                  <Typography
                    component="mark"
                    sx={{
                      position: 'relative',
                      color: 'primary.main',
                      fontSize: 'inherit',
                      fontWeight: 'bolder',
                      // fontFamily:"Sedgwick Ave Display",
                      backgroundColor: 'unset',
                    }}
                  >
                    Work Smarter,
                
                    {/* <Box
                      sx={{
                        position: 'absolute',
                        top: { xs: 24, md: 34 },
                        left: 2,
                        transform: 'rotate(3deg)',
                        '& img': { width: { xs: 146, md: 210 }, height: 'auto' },
                      }}
                    >
                 
                      <img src="/images/headline-curve.svg" alt="Headline curve" />
                    </Box> */}
                  </Typography>
                  <br></br>Not Harder
                </Typography>
              </Box>
              <Box sx={{ mb: 4, width: { xs: '100%', md: '70%' } }}>
                <Typography   sx={{ color: 'black', lineHeight: 1.6 }}>
                  {
"We believe that automation is the key to unlocking productivity, improving decision-making, and achieving sustainable growth. Our solutions are designed to help you save time, reduce costs, and increase your competitive advantage."                }
                </Typography>
              </Box>
              <Box sx={{ '& button': { mr: 2 } }}>
                <ScrollLink to="popular-course" spy={true} smooth={true} offset={0} duration={350}>
                  <StyledButton color="primary" size="large" variant="contained">
                    Contact Us
                  </StyledButton>
                </ScrollLink>
                {/* <ScrollLink to="video-section" spy={true} smooth={true} offset={0} duration={350}>
                  <StyledButton color="primary" size="large" variant="outlined" startIcon={<PlayArrowIcon />}>
                    Watch Video
                  </StyledButton>
                </ScrollLink> */}
               
              </Box>
            </Box>
          </Grid>
        
           <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' }}}>
            <Box sx={{ width: { xs: '150%', md: '140%'}}}>
            <Image src="/images/avatars/1.svg" width={620} height={650} quality={97} alt="hero" />
            </Box>
          </Grid>
        
        </Grid>


      </Container>
    </Box>
  )
}

export default HomeHero
