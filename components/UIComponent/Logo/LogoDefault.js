import React from 'react'
import NextLink from 'next/link'
import { Link } from '@mui/material'
import Box from '@mui/material/Typography'
import Logo from '@components/Icons/Logo'
import { useTheme } from '@mui/material/styles'

export default function LogoComponent({ width }) {
  const theme = useTheme()

  return (
    <Box>
      <NextLink href="/" passHref>
        <Link>
          <Logo width={width} color={theme.palette.text.primary} />
        </Link>
      </NextLink>
    </Box>
  )
}
