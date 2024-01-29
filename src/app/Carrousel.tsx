'use client'
import { Stack, Box, Button } from '@mui/material'
import { type ReactElement } from 'react'

import { Arrow } from '@/components/icons'
import { useRef } from 'react'

export const ELEMENT_WIDTH = 210

export default function Carrousel ({ children }: { children: ReactElement }) {
  const refContainerCarrousel = useRef<HTMLDivElement>(null)
  const movementCarouselLeft = (): void => {
    if (refContainerCarrousel.current !== null) {
      refContainerCarrousel.current.scrollLeft -= (ELEMENT_WIDTH)
    }
  }

  const movementCarouselRight = (): void => {
    if (refContainerCarrousel.current !== null) {
      refContainerCarrousel.current.scrollLeft += (ELEMENT_WIDTH)
    }
  }

  return (
        <Box sx={{ position: 'relative', marginTop: 0 }}>
            <Button onClick={movementCarouselLeft} sx={{ position: 'absolute', top: '40%', left: 0, aspectRatio: '1/1' }}>
                <Arrow />
            </Button>
            <Stack id='container-carrousel' gap={5} direction='row' sx={{ flexWrap: 'nowrap', p: '2rem 5rem 5rem 5rem', overflowX: 'scroll', scrollSnapType: 'x mandatory', justifyContent: 'space-between' }} ref={refContainerCarrousel} style={{ scrollBehavior: 'smooth' }} >
                {
                    children
                }
            </Stack>
            <Button onClick={movementCarouselRight} sx={{ position: 'absolute', top: '40%', right: 0, aspectRatio: '1/1' }}>
                <Arrow style={{ transform: 'rotate(180deg)' }} />
            </Button>
        </Box>
  )
}
