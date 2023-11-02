import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Exchange',
    description: '3',
    // icon: <ArtTrackIcon />,
  },
  {
    title: 'Algo Sessions',
    description: '50k+',
    // icon: <AttachMoneyIcon />,
  },
  {
    title: 'Client Volume',
    description: '25M+',
    // icon: <LocalLibraryIcon />,
  },
  {
    title: 'Broking Houses',
    description: '20',
    // icon: <ContactSupportIcon />,
  },
]
