import React from 'react'
import { Paper, Box, Typography } from '@mui/material'

export default function Slot({ title, children }) {
  return (
    <Paper>
      <Typography>{title}</Typography>
      <Box>{children}</Box>
    </Paper>
  )
}
