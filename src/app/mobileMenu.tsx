'use client'
import { Box, ButtonBase, Menu, MenuItem, Stack, Link } from '@mui/material'
import { useState, type MouseEvent } from 'react'
import { Navigation } from './navButtons'
import { User, Menu as MenuIcon } from '@/components/icons'

function MobileMenu () {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
        <>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button'
                }}
            >
                <Stack minWidth='70vw' sx={{ gap: '1rem', listStyleType: 'none', display: 'grid', gridTemplateColumns: '1fr', alignItems: 'center', justifyContent: 'center' }} >
                    {
                        Navigation.map(({ label, href }) => (
                            <Link key={label} href={href} underline='none' color={{ sm: 'white', xs: 'black' }}>
                                <MenuItem onClick={handleClose} >
                                    {label}
                                </MenuItem>
                            </Link>
                        ))
                    }
                    <MenuItem onClick={handleClose}><User /></MenuItem>
                </Stack>
            </Menu>
            <Box className='mobile'>
                <ButtonBase
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick} sx={{ borderRadius: '.4rem', padding: '.3rem', backgroundColor: 'white', fontSize: '1.2rem', color: 'black' }}>
                    <MenuIcon />
                </ButtonBase>
            </Box>
        </>
  )
}

export default MobileMenu
