import React from 'react'
import { Paper, Container, Typography, Link } from '@mui/material'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © - '}
      <Link color="inherit" href="#">
        {'NewCoinsHunter'}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default function Footer({ description, title }) {
  return (
    <Paper
      component="footer"
      variant="outlined"
      sx={{ bgcolor: 'background.paper', py: 6 }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Paper>
  )
}
