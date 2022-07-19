import React from 'react'
import FilterList from '@mui/icons-material/FilterList'
import { Button } from '@mui/material'
import { useTheme } from '@mui/material'

export default function FilterToggle({ handleSidebar }) {
  const theme = useTheme()
  return (
    <Button
      sx={{
        color: 'text.primary',
        border: `1px solid ${theme.palette.text.primary}`
      }}
      onClick={handleSidebar}
      startIcon={<FilterList />}
    >
      {'Filter'}
    </Button>
  )
}
