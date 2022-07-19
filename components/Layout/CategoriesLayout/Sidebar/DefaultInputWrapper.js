import React, { useState, useEffect } from 'react'
import {
  Paper,
  Checkbox,
  Grid,
  FormGroup,
  FormControlLabel
} from '@mui/material'

const listOfInputs = [
  { name: 'ethereum' },
  { name: 'aave' },
  { name: 'cardano' },
  { name: 'bitcoin' }
]

const splitInTwoArrays = (arr) => {
  const result = [[], []]
  arr.forEach((item, index) => {
    if ((index + 1) % 2 == 0) {
      result[1].push(item)
    } else {
      result[0].push(item)
    }
  })
  return result
}

export default function DefaultInputWrapper() {
  const [inputs, setInputs] = useState([[{ name: '' }], [{ name: '' }]])

  useEffect(() => {
    setInputs(splitInTwoArrays(listOfInputs))
  }, [splitInTwoArrays])

  return (
    <FormGroup sx={{ px: '0.5rem' }}>
      <Paper elevation={0}>
        <Grid container spacing={2} sx={{ mx: 'auto' }}>
          <Grid item xs={6}>
            {inputs
              ? inputs[0].map((item, index) => {
                  return (
                    <FormControlLabel
                      key={index}
                      control={<Checkbox />}
                      label={item.name}
                      size="small"
                    />
                  )
                })
              : ''}
          </Grid>
          <Grid item xs={6}>
            {inputs
              ? inputs[1].map((item, index) => {
                  return (
                    <FormControlLabel
                      key={index}
                      control={<Checkbox />}
                      label={item.name}
                      size="small"
                    />
                  )
                })
              : ''}
          </Grid>
        </Grid>
      </Paper>
    </FormGroup>
  )
}
