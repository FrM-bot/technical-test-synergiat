import { Typography, Container, Stack, ButtonBase } from '@mui/material'
import { Colors } from '@/lib/theme'

function AssessSection () {
  return (
    <Container component="section" maxWidth="xs" sx={{ marginY: '8rem' }}>
        <Stack gap={5}>
          <Typography color={Colors.primary} textAlign='center' variant='h3' component='h3' sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2rem' }}>
            Clasifica tu experiencia
          </Typography>
          <ButtonBase sx={{ borderRadius: '.4rem', padding: '.7rem', backgroundColor: 'black', fontSize: '1.2rem', color: 'white' }}>
            Clasificar
          </ButtonBase>
        </Stack>
      </Container>
  )
}

export default AssessSection
