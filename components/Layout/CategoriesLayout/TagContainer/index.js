import React, { useState } from 'react'
import { Paper } from '@mui/material'
import Tags from './Tags'

export default function TagContainer({ tagList }) {
  const [tagData, setTagData] = useState(tagList ? [...tagList] : [])

  const deleteMakerByItem = (tagToDelete) => () => {
    if (tagData) {
      setTagData((tagList) =>
        tagList.filter((tag) => tag.key !== tagToDelete.key)
      )
    }
  }

  return (
    <React.Fragment>
      {tagData.length > 0 && (
        <Paper
          elevation={0}
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            p: '1.2rem 0.8rem 1.2rem 0.8rem'
          }}
        >
          <Tags tagData={tagData} deleteMakerByItem={deleteMakerByItem} />
        </Paper>
      )}
    </React.Fragment>
  )
}
