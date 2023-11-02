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
    title: 'Financing for Automation Equipment',
    description: 'Get the latest automation equipment without straining your cash flow. ',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Automation Project Financing',
    description: 'Fund your entire automation project, from concept to completion.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Working Capital Solutions',
    description: 'Access working capital to support your day-to-day operations.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Automation Technology Leasing',
    description: 'Lease automation technology and software to stay up-to-date with the latest innovations.',
    icon: <ContactSupportIcon />,
  },
]
