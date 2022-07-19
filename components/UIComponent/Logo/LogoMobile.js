import React from 'react'
import NextLink from 'next/link'
import { Link } from '@mui/material'
import Box from '@mui/material/Typography'
import LogoMobile from '@components/Icons/LogoMobile'
import { useTheme } from '@mui/material/styles'

export default function LogoMobileComponent({ width }) {
  const theme = useTheme()

  return (
    <Box>
      <NextLink href="/" passHref>
        <Link>
          <LogoMobile width={width} color={theme.palette.text.primary} />
        </Link>
      </NextLink>
    </Box>
  )
}
