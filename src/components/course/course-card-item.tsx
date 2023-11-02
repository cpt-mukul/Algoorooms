import React, { FC } from 'react'
import Image from 'next/image'
import {Box , Stack}from '@mui/material'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import IconButton, { iconButtonClasses } from '@mui/material/IconButton'
import ArrowForward from '@mui/icons-material/ArrowForward'
import { Course } from '@/interfaces/course'

interface Props {
  item: Course
}

const CourseCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        px: 1,
        py: 4,
      }}
     
    >
      <Box
      height={300}
      
        sx={{
          p: 2,
          borderRadius: 4,
          transition: (theme) => theme.transitions.create(['box-shadow']),
         
            boxShadow: 2,
            [`& .${iconButtonClasses.root}`]: {
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
              boxShadow: 2,
            },
          //  xs:{height:"900"} 
        
        }}
      >
        {/* <Box
          sx={{
            lineHeight: 0,
            overflow: 'hidden',
            borderRadius: 3,
            mb: 2,
          }}
        >
          <Image src={item.cover} width={760} height={760} alt={'Course ' + item.id} />
        </Box> */}
        <Box sx={{ mb: 6 }}>
        
        <Image src={item.link} width={50} height={50}  alt={'number ' + item.id} />
        <Typography component="h2" variant="h5" sx={{mt:1, height: 40, overflow: 'hidden', fontSize: '1.2rem', alignItems:"center"}}>
             {item.title}
          </Typography>
      
         
          <Box height={50} sx={{alignItems: 'center' }}>
            {/* <Rating ame="rating-course" value={item.rating} max={5} sx={{ color: '#ffce31', mr: 1 }} readOnly /> */}
            <Typography component="span" variant="subtitle2">
              {item.about}
            </Typography>
          </Box>
        </Box>
        {/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> */}
          {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h5" color="primary.main">
              {'$' + item.price}
            </Typography>
            <Typography variant="h6">/ course</Typography>
          </Box> */}
          {/* <IconButton
            color="primary"
            sx={{ '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' } }}
          >
            <ArrowForward />
          </IconButton>
        </Box> */}
      </Box>
    </Box>
  )
}

export default CourseCardItem
