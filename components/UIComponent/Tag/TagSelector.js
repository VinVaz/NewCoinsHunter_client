import React from 'react'
import { Chip, Avatar } from '@mui/material'

const TagSelector = ({ iconAddress, label, deleteFunction }) => {
  return (
    <Chip
      sx={{
        borderRadius: '0.5rem',
        fontWeight: '500',
        '&&hover': {
          backgroundColor: '#dedede'
        }
      }}
      avatar={<Avatar alt={String(label).charAt(0)} src={iconAddress} />}
      label={String(label)}
      variant="filled"
      size="medium"
      color="secondary"
      onDelete={() => deleteFunction()}
    />
  )
}

export default TagSelector
