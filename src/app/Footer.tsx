import { Typography, Container, Stack, Box, Divider, Link } from '@mui/material'
import { Colors } from '@/lib/theme'
import { Linkedin, X } from '@/components/icons'

const FooterLinks = [
  {
    label: 'Link 1',
    href: '#'
  },
  {
    label: 'Link 2',
    href: '#'
  },
  {
    label: 'Link 3',
    href: '#'
  }
]

function Footer () {
  return (
    <Box sx={{ backgroundColor: Colors.primary, marginTop: '5rem' }}>
    <Container component='section' sx={{ paddingY: '3rem', color: 'white', maxWidth: '962px' }}>
      <Stack direction={{ md: 'row' }} gap={2} justifyContent='space-between' alignItems="center">

        <Stack
          divider={<Divider orientation="vertical" flexItem sx={{ width: '.1rem', backgroundColor: 'white' }} />}
          direction='row'
          alignItems='center'
          gap={{ md: '2rem', xs: '1rem' }}
        >

          <Typography variant='h2' component='h2' sx={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem' }}>
            Logo
          </Typography>
          <Stack gap='1rem'>
            <Typography variant='subtitle1' component='h2' sx={{ fontWeight: 600, fontSize: '1rem' }}>
              About us
            </Typography>
            <Typography variant='subtitle1' component='p' sx={{ fontWeight: 300, fontSize: '0.8rem', maxWidth: '280px' }}>
              Lorem ipsum dolor sit amet consectetur. Eget est diam pharetra porttitor malesuada facilisi. Dui lorem eget morbi diam. Sit justo vitae venenatis est nunc vel tellus auctor. Odio tincidunt tempor hendrerit nunc felis aliquet urna mollis quam.
            </Typography>
          </Stack>
        </Stack>

        <Stack>
          <Typography variant='subtitle1' component='h2' sx={{ fontWeight: 600, fontSize: '1rem' }}>
            Quick Links
          </Typography>
          <ul style={{ paddingLeft: '1.2rem' }}>
            {FooterLinks.map(({ href, label }) => (
              <li key={label} style={{ padding: 0 }}>
                <Link href={href} target='_blank' underline='none' color='white'>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </Stack>

        <Stack gap='1rem'>
          <Stack direction="row" gap='1rem'>
            <X />
            <Linkedin />
          </Stack>
          <Link href='#' target='_blank' underline='none' color='white' sx={{ fontWeight: 600, fontSize: '1.2rem' }}>
            asdasd@asd.com
          </Link>
        </Stack>
      </Stack>
      <Stack direction={{ md: 'row', xs: 'column-reverse' }} mt='1rem' justifyItems="center" alignItems="center" justifyContent="center" gap={4}>
        <Typography variant='subtitle1' component='h2' sx={{ fontWeight: 600, fontSize: '1.2rem' }}>
          2023 Nombre. All right reserved
        </Typography>
        <Link href='#' underline='none' color='white'>
          Terminos y condiciones
        </Link>
        <Link href='#' underline='none' color='white'>
          Politicas de privacidad
        </Link>
        <Link href='#' underline='none' color='white'>
          Seguridad
        </Link>
      </Stack>
    </Container>
  </Box>
  )
}

export default Footer
