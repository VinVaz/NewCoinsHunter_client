import React, { useState, useEffect } from 'react'
import NextLink from 'next/link'
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Badge,
  Box,
  IconButton
} from '@mui/material'
import Brightness5Icon from '@mui/icons-material/Brightness5'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Sidebar from './Sidebar'
import LogoDefault from '@components/UIComponent/Logo/LogoDefault'
import LogoMobile from '@components/UIComponent/Logo/LogoMobile'
import ProfileSection from './ProfileSection'
import { getError } from '/utils/error'
import { useSnackbar } from 'notistack'
import axios from 'axios'

const pages = [
  'Collections',
  'Popular Accounts',
  'Trends',
  'New Coins',
  'Price'
]

export default function Header({ darkMode, darkModeChangeHandler }) {
  const [sidebarVisible, setSidebarVisible] = useState(false)
  const [dummyBool] = useState(true)
  const [categories, setCategories] = useState([])

  const sidebarOpenHandler = () => {
    setSidebarVisible(true)
  }
  const sidebarCloseHandler = () => {
    setSidebarVisible(false)
  }

  const { enqueueSnackbar } = useSnackbar()
  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`/api/products/categories`)
      setCategories(data)
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: 'error' })
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <AppBar color="inherit" position="static" variant="outlined">
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'row',
          wrap: 'no-wrap',
          justifyContent: 'space-between'
        }}
      >
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            mr: 1,
            paddingTop: '0.5rem',
            paddingLeft: '3rem'
          }}
        >
          <LogoDefault width={'225px'} />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          maxWidth="52%"
          sx={{
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' }
          }}
        >
          <Box display="flex">
            <IconButton
              edge="start"
              aria-label="open drawer"
              onClick={sidebarOpenHandler}
            >
              <MenuIcon />
            </IconButton>
            <Sidebar
              sidebarCloseHandler={sidebarCloseHandler}
              open={sidebarVisible}
              categories={categories}
            />
          </Box>
          <Box
            sx={{
              justifyContent: 'center',
              color: 'inherit',
              mt: 1
            }}
          >
            <LogoMobile width={'36px'} />
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            wrap: 'no-wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexGrow: 0
          }}
        >
          <IconButton onClick={darkModeChangeHandler} color="inherit">
            {darkMode ? <Brightness5Icon /> : <Brightness4Icon />}
          </IconButton>

          {dummyBool ? (
            <>
              <NextLink href="/account/notifications" passHref>
                <Link>
                  <Typography component="span">
                    {dummyBool ? (
                      <Badge color="secondary" badgeContent={6}>
                        <NotificationsIcon />
                      </Badge>
                    ) : (
                      <NotificationsIcon />
                    )}
                  </Typography>
                </Link>
              </NextLink>
              <ProfileSection hasRestrictedAccess={true} />
            </>
          ) : (
            <>
              <NextLink href="/signin" passHref>
                <Link>
                  <Typography component="span">Sign in</Typography>
                </Link>
              </NextLink>
              <NextLink href="/signup" passHref>
                <Link>
                  <Typography component="span">Sign up</Typography>
                </Link>
              </NextLink>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
