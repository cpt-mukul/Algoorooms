import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
    <Box onClick={onClick}>
      {/* <Typography
        variant="h4"
        component="h1"
        sx={{ fontWeight: 700, '& span': { color: variant === 'primary' ? 'primary.main' : 'unset' } }}
      >
        Course<span>space</span>
      </Typography> */}
      <Image src="/logo.svg" width={200} height={60} alt="Hero img" />
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
