import { Typography, Container, Stack, Box, ButtonBase } from '@mui/material'
import NavButtons from './navButtons'
import { User } from '@/components/icons'
import MobileMenu from './mobileMenu'

const headerImage = '/images/header.jpeg'

function Header () {
  return (
        <Box sx={{
          backgroundImage: `
        linear-gradient(
          to bottom,
          rgb(0 0 0 / 50%),
          rgb(0 0 0 / 50%)
        ), url(${headerImage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minHeight: '50vh',
          paddingTop: '1rem'
        }}
            width='100%'
        >
            <Container maxWidth="xl" component='header'>

                <Stack component='nav' justifyContent="space-between" alignItems="center" direction="row" sx={{ color: 'white' }}>
                    <Typography color='white' textAlign='center' variant='h3' component='h3' sx={{ textAlign: 'center', fontWeight: 800, fontSize: '1.7rem' }}>
                        Logo
                    </Typography>

                    <Box className='desktop'>
                        <NavButtons />
                    </Box>

                    <Box className='desktop'>
                        <ButtonBase color="text.secondary" sx={{ borderRadius: '.4rem', padding: '.3rem', backgroundColor: 'white', fontSize: '1.2rem' }}>
                            <User />
                        </ButtonBase>
                    </Box>
                    <MobileMenu />
                </Stack>
                <Stack>
                    <Stack gap={5} maxWidth='524px' sx={{ margin: '10rem auto 0 auto' }}>
                        <Typography color='white' textAlign='center' variant='h3' component='h1' sx={{ textAlign: 'center', fontWeight: 900, fontSize: '3rem' }}>
                            Nombre del Hotel
                        </Typography>
                        <ButtonBase color="text.secondary" sx={{ borderRadius: '.4rem', padding: '.7rem', backgroundColor: 'white', fontSize: '1.2rem' }}>
                            Hacer reserva
                        </ButtonBase>
                    </Stack>
                </Stack>
            </Container>
        </Box>
  )
}

export default Header
