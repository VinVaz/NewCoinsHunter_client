import React from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import TagSelector from '@components/UIComponent/Tag/TagSelector'

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5)
}))

export default function TagContainer({ tagData, deleteMakerByItem }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: 0,
        margin: 0
      }}
      component="ul"
    >
      {tagData.map((tag) => {
        const deleteFunction = deleteMakerByItem(tag)
        return (
          <ListItem key={tag.key}>
            <TagSelector
              iconAddress={tag.iconAddress}
              label={tag.label}
              deleteFunction={deleteFunction}
            />
          </ListItem>
        )
      })}
    </Box>
  )
}
