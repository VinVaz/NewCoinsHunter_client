import React from 'react'
import { Pagination, Stack, Paper } from '@mui/material'

export default function PaginationWrapper({ count, page, handleChange }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: '1.4rem',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Stack spacing={2}>
        <Pagination
          count={count}
          page={page}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </Paper>
  )
}
