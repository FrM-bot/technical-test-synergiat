import { Typography, Container, Stack, Box, ButtonBase } from '@mui/material'
import { Colors } from '@/lib/theme'

function ReservationSection () {
  return (
    <Box sx={{ backgroundColor: Colors.primary, margin: '5rem 0' }}>
        <Container component='section' maxWidth='md' sx={{ paddingY: '1rem' }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={6}>
            <img style={{ borderRadius: '1rem' }} src="/images/inn.jpg" />
            <Stack spacing={2} color='white'>
              <Typography variant='h3' component='h3' sx={{ fontWeight: 'bold', fontSize: '1.8rem' }}>
                Nombre de la habitación
              </Typography>
              <Typography sx={{ fontWeight: 200, fontSize: '1.2rem' }}>
                Lorem ipsum dolor sit amet consectetur. Eu felis risus quis nisi lectus.
              </Typography>
              <Typography sx={{ fontWeight: 200, fontSize: '1.2rem' }}>
                Enim ipsum nisi gravida massa odio. Volutpat fermentum.
              </Typography>
              <ButtonBase sx={{ mt: '4rem', borderRadius: '.4rem', padding: '.7rem', backgroundColor: 'white', color: 'rgb(174 150 114)', fontSize: '1.2rem', fontWeight: 600 }}>
                Hacer Reservación
              </ButtonBase>
            </Stack>
          </Stack>
        </Container>
      </Box>
  )
}

export default ReservationSection
