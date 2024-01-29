'use client'
import { Card, CardMedia, CardContent, Typography, Container, Stack, Box } from '@mui/material'
import Carrousel, { ELEMENT_WIDTH } from './Carrousel'
import { useStore } from '@/store'
import { type ReactElement } from 'react'
import { formatNumber } from '@/lib/utils'

const CardCarrousel = ({ children }: { children: ReactElement[] }) => (
    <Card variant='elevation' sx={{
      borderRadius: 5,
      width: ELEMENT_WIDTH,
      boxShadow: '0px 5px 35px 0px rgba(174, 150, 114, 0.3);',
      padding: 2,
      scrollSnapAlign: 'center',
      flexShrink: 0,
      flexGrow: 0

    }}>
        {children}
    </Card>
)

const currency = 'USD'
const locales = 'es-Es'

function MenuSection () {
  const [Lunches, BreakfastAndDinners, Desserts, Drinks] = useStore(({ lunches, breakfastAndDinners, desserts, drinks }) => [lunches, breakfastAndDinners, desserts, drinks])
  return (
        <Container component='section' id='menu' maxWidth='lg'>
            <Typography sx={{ textAlign: 'center', marginTop: '4rem', fontWeight: 'bold', fontSize: '2rem' }}>
                Tus recomedaciones
            </Typography>

            <Stack spacing={10}>
                <Typography sx={{ fontWeight: 'bold', fontSize: 'h5.fontSize' }}>
                    Almuerzos
                </Typography>
                <Carrousel>
                    <>
                        {
                            Lunches.map(({ name, image, price }) => (
                                <CardCarrousel key={name}>
                                    <CardMedia
                                        style={{ borderRadius: 10 }}
                                        component="img"
                                        height="154"
                                        image={image}
                                        alt={name}
                                    />
                                    <CardContent sx={{ padding: '1rem 0 0 0' }}>
                                        <Typography variant='h3' component='h3' sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: 'h6.fontSize' }}>
                                            {name}
                                        </Typography>
                                        <Typography color="text.secondary" sx={{ textAlign: 'center', color: 'black', fontSize: 18, mt: '1rem' }}>
                                            {formatNumber({ number: price, locales, option: { style: 'currency', currency } })}
                                        </Typography>
                                    </CardContent>
                                </CardCarrousel>
                            ))
                        }
                    </>
                </Carrousel>
                <Box>
                    <Typography sx={{ fontWeight: 'bold', fontSize: 'h5.fontSize' }}>
                        Desayunos y Cenas
                    </Typography>
                    <Carrousel>
                        <>
                            {
                                BreakfastAndDinners.map(({ name, image, price }) => (
                                    <CardCarrousel key={name}>
                                        <CardMedia
                                            style={{ borderRadius: 10 }}
                                            component="img"
                                            height="154"
                                            image={image}
                                            alt={name}
                                        />
                                        <CardContent sx={{ padding: '1rem 0 0 0' }}>
                                            <Typography variant='h3' component='h3' sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: 'h6.fontSize' }}>
                                                {name}
                                            </Typography>
                                            <Typography color="text.secondary" sx={{ textAlign: 'center', color: 'black', fontSize: 18, mt: '1rem' }}>
                                                {formatNumber({ number: price, locales, option: { style: 'currency', currency } })}
                                            </Typography>
                                        </CardContent>
                                    </CardCarrousel>
                                ))
                            }
                        </>
                    </Carrousel>
                </Box>

                <Box>
                    <Typography sx={{ fontWeight: 'bold', fontSize: 'h5.fontSize' }}>
                        Postres
                    </Typography>
                    <Carrousel>
                        <>
                            {
                                Desserts.map(({ name, image, price }) => (
                                    <CardCarrousel key={name}>
                                        <CardMedia
                                            style={{ borderRadius: 10 }}
                                            component="img"
                                            height="154"
                                            image={image}
                                            alt={name}
                                        />
                                        <CardContent sx={{ padding: '1rem 0 0 0' }}>
                                            <Typography variant='h3' component='h3' sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: 'h6.fontSize' }}>
                                                {name}
                                            </Typography>
                                            <Typography color="text.secondary" sx={{ textAlign: 'center', color: 'black', fontSize: 18, mt: '1rem' }}>
                                                {formatNumber({ number: price, locales, option: { style: 'currency', currency } })}
                                            </Typography>
                                        </CardContent>
                                    </CardCarrousel>
                                ))
                            }
                        </>
                    </Carrousel>
                </Box>

                <Box>
                    <Typography sx={{ fontWeight: 'bold', fontSize: 'h5.fontSize' }}>
                        Bebidas
                    </Typography>
                    <Carrousel>
                        <>
                            {
                                Drinks.map(({ name, image, price }) => (
                                    <CardCarrousel key={name}>
                                        <CardMedia
                                            style={{ borderRadius: 10 }}
                                            component="img"
                                            height="154"
                                            image={image}
                                            alt={name}
                                        />
                                        <CardContent sx={{ padding: '1rem 0 0 0' }}>
                                            <Typography variant='h3' component='h3' sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: 'h6.fontSize' }}>
                                                {name}
                                            </Typography>
                                            <Typography color="text.secondary" sx={{ textAlign: 'center', color: 'black', fontSize: 18, mt: '1rem' }}>
                                                {formatNumber({ number: price, locales, option: { style: 'currency', currency } })}
                                            </Typography>
                                        </CardContent>
                                    </CardCarrousel>
                                ))
                            }
                        </>
                    </Carrousel>
                </Box>
            </Stack>
        </Container>
  )
}

export default MenuSection
