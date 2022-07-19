import React from 'react'
import NextLink from 'next/link'
import {
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  Divider,
  ListItemText
} from '@mui/material'
import LogoMobile from '@components/UIComponent/Logo/LogoMobile'
import CloseIcon from '@mui/icons-material/Close'
import styled from '@emotion/styled'

const ListItemMobileDrawer = styled(ListItem)(() => ({
  padding: '0.7rem 1.5rem 0.3rem 2rem'
}))

export default function Sidebar({
  sidebarCloseHandler,
  open,
  categories,
  window
}) {
  const drawer = (
    <div>
      <List>
        <ListItemMobileDrawer>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              flexWrap: 'no-wrap',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <LogoMobile width={'32px'} />
            <IconButton aria-label="close" onClick={sidebarCloseHandler}>
              <CloseIcon />
            </IconButton>
          </Box>
        </ListItemMobileDrawer>
      </List>
      <Divider light />
      <List>
        {['Most Popular', 'Collections', 'Signup'].map((category) => (
          <NextLink
            key={category}
            href={`/search?category=${category}`}
            passHref
          >
            <ListItem button component="a" onClick={sidebarCloseHandler}>
              <ListItemText
                primary={category}
                sx={{ display: 'flex', justifyContent: 'center' }}
              ></ListItemText>
            </ListItem>
          </NextLink>
        ))}
      </List>
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={sidebarCloseHandler}
      container={container}
      variant="temporary"
      ModalProps={{
        keepMounted: true // Better open performance on mobile.
      }}
      sx={{
        display: { sm: 'block' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: { xs: '100%', sm: '435px' }
        }
      }}
    >
      {drawer}
    </Drawer>
  )
}
