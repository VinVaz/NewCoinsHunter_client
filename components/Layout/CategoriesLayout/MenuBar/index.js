import { Box, Paper } from '@mui/material'
import React from 'react'
import FilterToggle from './FilterToggle'
import MobileFilterToggle from './FilterToggle'
import SortMenu from './SortMenu'
import SearchBar from '@components/UIComponent/Input/SearchBar'

function MenuCollapseList({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        padding: '5px 15px 5px 15px',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between'
      }}
    >
      {children}
    </Box>
  )
}

function MenuCollpaseListItem({ children, width }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '100%', md: `${width ? width : 'auto'}` }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          padding: { xs: '15px 0 15px 0' },
          justifyContent: { md: 'space-between', xs: 'center' },
          alignItems: 'center'
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
function FilterToggleDisplay({ children }) {
  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'flex' }
      }}
    >
      {children}
    </Box>
  )
}
function MobileFilterToggleDisplay({ children }) {
  return (
    <Box
      sx={{
        display: { xs: 'flex', md: 'none' }
      }}
    >
      {children}
    </Box>
  )
}
export default function FilterSection({ handleSidebar }) {
  return (
    <Paper variant="outlined">
      <MenuCollapseList>
        <MenuCollpaseListItem>
          <Box
            sx={{
              display: 'flex',
              width: { xs: '100%', md: 'auto' },
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <SortMenu />
            <MobileFilterToggleDisplay>
              <MobileFilterToggle handleSidebar={handleSidebar} />
            </MobileFilterToggleDisplay>
          </Box>
        </MenuCollpaseListItem>
        <MenuCollpaseListItem>
          <Box>asdfasd</Box>
        </MenuCollpaseListItem>
        <MenuCollpaseListItem width={'34%'}>
          <SearchBar placeholder="Search..." />
          <FilterToggleDisplay>
            <FilterToggle handleSidebar={handleSidebar} />
          </FilterToggleDisplay>
        </MenuCollpaseListItem>
      </MenuCollapseList>
    </Paper>
  )
}
