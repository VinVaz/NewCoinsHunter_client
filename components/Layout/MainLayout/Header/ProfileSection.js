import React, { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { useAppDispatch } from '../../../../hooks'
import { USER_LOGOUT } from '../../../../store/types'
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuList,
  Stack,
  Typography
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import LogoutIcon from '@mui/icons-material/Logout'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import CollectionsIcon from '@mui/icons-material/Collections'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'

import Cookies from 'js-cookie'

export default function ProfileSection({ hasRestrictedAccess }) {
  const dispatch = useAppDispatch()
  const theme = useTheme()
  const router = useRouter()

  const [anchorEl, setAnchorEl] = useState(null)
  const isMenuOpen = Boolean(anchorEl)

  const handleMenuOpen = (e) => {
    setAnchorEl(e.currentTarget)
    e.preventDefault()
  }
  const handleMenuClose = (e, redirect) => {
    e.preventDefault()
    setAnchorEl(null)
    if (redirect) {
      router.push(redirect)
    }
  }
  const menuId = 'primary-search-account-menu'

  const logoutClickHandler = () => {
    setAnchorEl(null)
    dispatch({ type: USER_LOGOUT })
    Cookies.remove('userInfo')
    router.push('/')
  }

  return (
    <>
      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        onClick={handleMenuOpen}
        aria-haspopup="true"
        color="inherit"
      >
        <Avatar alt="Profile picture">U</Avatar>
      </IconButton>
      <Menu
        id={menuId}
        open={isMenuOpen}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={(e) => handleMenuClose(e, null)}
        disableRestoreFocus
      >
        <Box sx={{ p: 2 }}>
          <Stack>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <Typography variant="h5">Good Morning,</Typography>
              <Typography component="span" variant="h5" sx={{ fontWeight: 40 }}>
                Johne Doe
              </Typography>
            </Stack>
            <Typography variant="subtitle2">Project Admin</Typography>
          </Stack>
          <Divider />
          <MenuList
            sx={{
              width: '100%',
              maxWidth: 350,
              minWidth: 300,
              borderRadius: '10px',
              [theme.breakpoints.down('md')]: {
                minWidth: '100%'
              },
              '& .MuiListItemButton-root': {
                mt: 0.5
              }
            }}
          >
            <MenuItem
              onClick={(e) => handleMenuClose(e, '/profile')}
              sx={{ borderRadius: `3px` }}
            >
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="body2">Profile</Typography>}
              />
            </MenuItem>
            <MenuItem
              onClick={(e) => handleMenuClose(e, '/settings')}
              sx={{ borderRadius: `3px` }}
            >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body2">Account Settings</Typography>
                }
              />
            </MenuItem>
            <MenuItem
              onClick={(e) => handleMenuClose(e, '/collections')}
              sx={{ borderRadius: `3px` }}
            >
              <ListItemIcon>
                <CollectionsIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body2">My Collections</Typography>
                }
              />
            </MenuItem>
            {hasRestrictedAccess && (
              <MenuItem
                onClick={(e) => handleMenuClose(e, '/admin/dashboard')}
                sx={{ borderRadius: `3px` }}
              >
                <ListItemIcon>
                  <AdminPanelSettingsIcon />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography variant="body2">Admin Panel</Typography>}
                />
              </MenuItem>
            )}
            <MenuItem onClick={logoutClickHandler} sx={{ borderRadius: `3px` }}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="body2">Logout</Typography>}
              />
            </MenuItem>
          </MenuList>
        </Box>
      </Menu>
    </>
  )
}
