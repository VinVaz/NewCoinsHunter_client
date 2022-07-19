import React from 'react'
import { styled } from '@mui/material/styles'
import { InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.text.primary}`,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto'
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  }
}))

export default function SearchBar({
  onChangeHandler,
  submitHandler,
  placeholder
}) {
  return (
    <>
      <form onSubmit={submitHandler}>
        <Search>
          <SearchIconWrapper type="submit" aria-label="search">
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            name="query"
            placeholder={placeholder}
            inputProps={{ 'aria-label': 'search' }}
            onChange={onChangeHandler}
          />
        </Search>
      </form>
    </>
  )
}
