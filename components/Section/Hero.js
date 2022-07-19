import React from 'react'
import { styled } from '@mui/material/styles'
import { Container, Grid, Box } from '@mui/material'

const Headline = styled('h1')(() => ({
  fontSize: '2.5rem',
  fontWeight: 700,
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center'
}))
const SubHeading = styled('h4')(() => ({
  fontSize: '1.3rem',
  fontWeight: 500,
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center'
}))

const Hero = ({ headline, subheading, children }) => {
  return (
    <Container maxWidth={'xl'} sx={{ my: '40px' }}>
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{ alignItems: 'center', justifyContent: 'center' }}>
            <Headline component={'h1'}>{headline}</Headline>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <SubHeading component={'h4'}>{subheading}</SubHeading>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {children && <Box>{children}</Box>}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Hero
