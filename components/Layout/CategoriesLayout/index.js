import React from 'react'
import { Box } from '@mui/material'

import DatabaseContainer from './DatabaseContainer'

export default function FeedLayout({ children }) {
  return (
    <Box>
      <DatabaseContainer>{children}</DatabaseContainer>
    </Box>
  )
}
