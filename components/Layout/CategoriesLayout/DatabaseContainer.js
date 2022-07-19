import React, { useState } from 'react'
import { Grid, Box, Collapse } from '@mui/material'
import styled from '@emotion/styled'

import Sidebar from './Sidebar'
import MenuBar from './MenuBar'
import TagContainer from './TagContainer'
import Pagination from './Pagination'

const tagList = [
  { key: 0, label: 'Best coin', iconAddress: '#' },
  { key: 1, label: 'Most Popular', iconAddress: '#' },
  { key: 2, label: 'Cheapest Coins', iconAddress: '#' },
  { key: 3, label: 'USA', iconAddress: '#' },
  { key: 4, label: 'Max Supply', iconAddress: '#' }
]

const sideBarWidth = 320

const MainArea = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ open }) => ({
  flexGrow: '1',
  ...(open && {
    width: `calc(100% - ${sideBarWidth}px)`
  })
}))

export default function DatabaseContainer({ children }) {
  const [page, setPage] = useState(1)
  const handleChange = (event, value) => {
    setPage(value)
  }
  const [sideBar, setSideBar] = useState(true)
  const handleSidebar = () => {
    setSideBar(!sideBar)
  }

  return (
    <Grid container>
      <Grid xs={12} item>
        <MenuBar handleSidebar={handleSidebar} />
      </Grid>
      <Grid xs={12} item>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'stretch'
          }}
        >
          <Collapse
            in={sideBar}
            orientation="horizontal"
            timeout={{ exit: 100 }}
          >
            <Box
              sx={{
                width: `${sideBarWidth}px`,
                height: '100%',
                flexShrink: 0
              }}
              display={{ xs: 'none', lg: 'block' }}
            >
              <Sidebar />
            </Box>
          </Collapse>
          <MainArea open={sideBar}>
            <Grid container sx={{ width: '100%' }}>
              <Grid xs={12} item>
                <TagContainer tagList={tagList} />
              </Grid>
              <Grid xs={12} item>
                <Box sx={{ padding: '1rem 0.5rem 1.5rem 0.5rem' }}>
                  {children}
                </Box>
              </Grid>
              <Grid xs={12} item>
                <Pagination
                  count={10}
                  page={page}
                  handleChange={handleChange}
                />
              </Grid>
            </Grid>
          </MainArea>
        </Box>
      </Grid>
    </Grid>
  )
}
