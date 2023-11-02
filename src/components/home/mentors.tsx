import React, { FC } from 'react'
import { Box, Grid } from '@mui/material'
import Slider, { Settings } from 'react-slick'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme, styled } from '@mui/material/styles'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'
import { MentorCardItem } from '@/components/mentor'
import { data } from './mentors.data'
import { Avatar, Stack } from '@mui/material'
import Image from 'next/image'
// import { data } from './feature.data'

interface SliderArrowArrow {
  onClick?: () => void
  type: 'next' | 'prev'
  className?: 'string'
}
const logoLinks1 = [
  'https://robo-matic.com/img/brokerlogo/broker_FDLogo.jpg',
  'https://robo-matic.com/img/brokerlogo/broker_ZRLogo.png',
  // 'https://robo-matic.com/img/brokerlogo/broker_FDLogo.jpg',
  'https://robo-matic.com/img/brokerlogo/angelLogo.jpeg',
  'https://robo-matic.com/img/brokerlogo/Fyers_Logo.PNG',
  // 'https://robo-matic.com/img/brokerlogo/basan_logo.png',
  'https://robo-matic.com/img/brokerlogo/iiflLogo.png',
  'https://robo-matic.com/img/brokerlogo/broker_MTlogo.png',
]
const logoLinks2 = [
  'https://robo-matic.com/img/brokerlogo/broker_ABLogo.png',
  'https://robo-matic.com/img/brokerlogo/NorenLogoLS.png',
  'https://robo-matic.com/img/brokerlogo/paytm_money.png',
  'https://robo-matic.com/img/brokerlogo/PENTAD_LOGO.jpg',
  'https://robo-matic.com/img/brokerlogo/upstox_logo.png',
  'https://robo-matic.com/img/brokerlogo/DuckByJainam.PNG',
]

const SliderArrow: FC<SliderArrowArrow> = (props) => {
  const { onClick, type, className } = props
  return (
    <IconButton
      sx={{
        color: 'primary.main',
        '&:hover': { color: 'primary.contrastText' },
        bottom: '-28px !important',
        left: 'unset !important',
        right: type === 'prev' ? '60px !important' : '0 !important',
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
    </IconButton>
  )
}

const StyledDots = styled('ul')(({ theme }) => ({
  '&.slick-dots': {
    position: 'absolute',
    left: 0,
    bottom: -20,
    paddingLeft: theme.spacing(1),
    textAlign: 'left',
    '& li': {
      marginRight: theme.spacing(2),
      '&.slick-active>div': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}))

const HomeOurMentors: FC = () => {
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))

  const sliderConfig: Settings = {
    infinite: true,
    // autoplay: true,
    speed: 300,
    slidesToShow: matchMobileView ? 1 : 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    dots: true,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
    customPaging: () => (
      <Box sx={{ height: 8, width: 30, backgroundColor: 'divider', display: 'inline-block', borderRadius: 4 }} />
    ),
  }

  return (
    // <Box
    //   id="mentors"
    //   sx={{
    //     pt: {
    //       xs: 6,
    //       md: 8,
    //     },
    //     pb: {
    //       xs: 8,
    //       md: 12,
    //     },
    //   }}
    // >
    //   <Container maxWidth="lg">
    //     <Typography variant="h1" sx={{ fontSize: 40 }}>
    //       {/* Our Expert Mentors */}
    //     </Typography>
    //     <Grid container spacing={3}>
    //       <Grid item xs={6} md={6} sx={{ display: { md: 'block' } }}>
    //         <Box>

    //         </Box>
    //         <Box sx={{ boxShadow: 4, borderRadius: 4,boxSizing: "border-box", alignItems: 'center',textAlign:'center' }} px={10} py={5} >
    //       <Stack spacing={3}>
    //         <Typography variant="h1" sx={{ fontSize: 40 }}>
    //       Our Brokers
    //           </Typography>

    //             {/* <Stack direction={'row'} spacing={15} paddingLeft={6}>
    //               <>
    //                 {logoLinks1.map((element) => {
    //                   return (
    //                     // {console.log(element)}

    //                     <Avatar
    //                       sx={{
    //                         width: 50,
    //                         height: 50,
    //                         boxShadow: `0 0 0 3px`,
    //                         border: '5px solid #fff',
    //                         backgroundColor: '#ffffff',
    //                         textDecoration: 'none!important',
    //                         display: ' flex!important',
    //                         img: {
    //                           width: '100%',
    //                           height: 'auto',
    //                         },
    //                       }}
    //                       alt="Bank logo"
    //                       src={element}
    //                     />
    //                   )
    //                 })}
    //               </>
    //             </Stack> */}

    //             {/* <Stack direction={'row'} spacing={15}  paddingLeft={6}>
    //               <>
    //                 {logoLinks2.map((element) => {
    //                   return (
    //                     <Avatar
    //                       sx={{
    //                         width: 50,
    //                         height: 50,
    //                         boxShadow: `0 0 0 3px`,
    //                         border: '5px solid #fff',
    //                         backgroundColor: '#ffffff',
    //                         textDecoration: 'none!important',
    //                         display: ' flex!important',
    //                         img: {
    //                           width: '100%',
    //                           height: 'auto',
    //                         },
    //                       }}
    //                       alt="Bank logo"
    //                       src={element}
    //                     />
    //                   )
    //                 })}
    //               </>
    //             </Stack> */}
    //             </Stack>
    //           </Box>

    //       </Grid>
    //     </Grid>

    //   </Container>
    // </Box>
    <Box
      id="mentors"
      sx={{
        pt: {
          xs: 6,
          md: 8,
        },
        pb: {
          xs: 8,
          md: 12,
        },
        
        overflow: 'hidden',
      }}
      mt={-25}
    >
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            {/* <Box sx={{ width: { xs: '150%', md: '180%' }, marginTop:"30px" }}> */}
            {/* <Image src="/images/avatars/testimonial.svg" width={620} height={450} quality={97} alt="Testimonial img" /> */}
            {/* </Box> */}

            <Stack sx={{ alignItems: 'center', textAlign: 'center' }} px={3} py={3}>
              <Typography variant="h1" sx={{ fontSize: 40, paddingBottom: 3, color: '#123591', paddingTop: 4 }}>
                Our Clients
              </Typography>

              <Grid container mb={5} rowSpacing={2} columnSpacing={2} justifyContent={"center"} alignItems={"center"} sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {logoLinks1.map((element) => {
                  return (
                    <Grid item>
                      <Avatar
                        sx={{
                          width: 50,
                          height: 50,
                          boxShadow: '0 0 0 3px #fff',

                          border: '5px solid #fff',
                          backgroundColor: '#ffffff',
                          textDecoration: 'none!important',
                          display: ' flex',
                          img: {
                            width: '100%',
                            height: 'auto',
                          },
                        }}
                        alt="Bank logo"
                        src={element}
                      />
                    </Grid>
                  )
                })}
                {logoLinks2.map((element) => {
                  return (
                    <Grid item>
                      <Avatar
                        sx={{
                          width: 50,
                          height: 50,
                          boxShadow: `0 0 0 3px #fff`,
                          border: '5px solid #fff',
                          backgroundColor: '#ffffff',
                          textDecoration: 'none!important',
                          display: ' flex!important',
                          img: {
                            width: '100%',
                            height: 'auto',
                          },
                        }}
                        alt="Bank logo"
                        src={element}
                      />
                    </Grid>
                  )
                })}
              </Grid>
              {/* <Typography variant="h1" sx={{ fontSize: 40, paddingBottom: 3,color:"#123591"}}  >
                   Our Brokers
               </Typography> */}
              <Grid container spacing={2}>
                {data.map(({ title, description, icon }, index) => (
                  <Grid key={String(index)} item xs={6} md={6}>
                    <Box sx={{ px: 2, py: 1.5, boxShadow: 2, borderRadius: 4, display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                        <Typography sx={{ lineHeight: 1.3, fontSize: '2rem' }} variant="h3">
                          {description}
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: '1rem', mb: 1, color: 'primary.main' }}>
                          {title}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: { xs: 'none', md: 'block' }}} >
              <Image src="/images/avatars/2.svg" width={920} height={900} quality={97} alt="broker img" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeOurMentors
