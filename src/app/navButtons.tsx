import { Link, Stack } from '@mui/material'
import React from 'react'

export const Navigation = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Menu',
    href: '#menu'
  },
  {
    label: 'Eventos',
    href: '#eventos'
  },
  {
    label: 'Servicios',
    href: '#servicios'
  }
]

export const NavElements = () =>
  <>
    {
      Navigation.map(({ label, href }) => (
        <li key={label}>
          <Link href={href} underline='none' color={{ sm: 'white' }}>
            {label}
          </Link>
        </li>
      ))
    }
  </>

function NavButtons () {
  return (
    <Stack component='ul' gap={6} direction={{ sm: 'row' }} sx={{ listStyleType: 'none' }}>
      <NavElements />
    </Stack>
  )
}

export default NavButtons
