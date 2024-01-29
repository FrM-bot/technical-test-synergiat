import { formatDate } from '@lib/utils'
import { Card, CardContent, Typography, Stack, Box } from '@mui/material'
import { useStore } from '@/store'

function EventsSection () {
  const [events] = useStore(({ events }) => [events])
  return (
    <Box component='section' id='eventos'>
    <Typography sx={{ mb: '1rem', fontWeight: 'bold', fontSize: 'h5.fontSize' }}>
      Eventos
    </Typography>

    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" justifyContent={{ md: 'space-around' }}>
      {
        events.map(({ name, image, date }) => (
          <Card key={name} sx={{
            borderRadius: 5,
            aspectRatio: '2/3',
            boxShadow: '0px 5px 35px 0px rgba(174, 150, 114, 0.3);',
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: 'white',
            display: 'grid',
            placeContent: 'center',
            margin: 'auto',
            padding: 2
          }}>
            <CardContent sx={{ padding: '12rem 0 0 0' }}>
              <Typography variant='h3' component='h3' sx={{ textAlign: 'center', fontWeight: 700, fontSize: 'h5.fontSize' }}>
                {name}
              </Typography>
              <Box sx={{ mt: '6rem' }}>
                <Typography sx={{ textAlign: 'center', fontSize: 18 }}>
                  {formatDate({ date, locales: 'es-ES', option: { dateStyle: 'full' } })}
                </Typography>
                <Typography sx={{ textAlign: 'center', fontSize: 18 }}>
                  {formatDate({ date, locales: 'es-ES', option: { hour: '2-digit', minute: '2-digit' } })} hs
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))
      }
    </Stack>
  </Box>
  )
}

export default EventsSection
