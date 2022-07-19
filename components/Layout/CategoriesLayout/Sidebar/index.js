import React from 'react'
import { Grid, Paper, Box, Typography } from '@mui/material'
import FilterAccordion from './FilterAccordion'
import DefaultInputWrapper from './DefaultInputWrapper'

const sideBarOptions = [
  {
    title: 'Categories',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
    eget.`
  },
  {
    title: 'Tags',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
    eget.`
  },
  {
    title: 'Color',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
    eget.`
  }
]

export default function Sidebar() {
  return (
    <Paper variant="outlined" sx={{ height: '100%' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box>
            <FilterAccordion order={0} title={'Platforms'}>
              <DefaultInputWrapper />
            </FilterAccordion>
            {sideBarOptions.map((option, index) => {
              return (
                <FilterAccordion
                  key={index + 1}
                  order={index}
                  title={option.title}
                >
                  <Typography>{option.content}</Typography>
                </FilterAccordion>
              )
            })}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <button>Clear All</button>
        </Grid>
      </Grid>
    </Paper>
  )
}
