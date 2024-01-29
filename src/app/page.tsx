'use client'
import { Container, Stack } from '@mui/material'
import Header from './Header'
import MenuSection from './MenuSection'
import ReservationSection from './ReservationSection'
import EventsSection from './EventsSection'
import ServicesSection from './ServicesSection'
import AssessSection from './AssessSection'
import Footer from './Footer'

export default function Home () {
  return (
    <>
      <Header />
      <MenuSection />
      <ReservationSection />
      <Container maxWidth='md'>
        <Stack spacing={10}>
          <EventsSection />
          <ServicesSection />
        </Stack>
      </Container>
      <AssessSection />
      <Footer />
    </>
  )
}
