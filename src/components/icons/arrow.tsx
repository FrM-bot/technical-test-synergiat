import { type SVGAttributes } from 'react'
interface Props extends SVGAttributes<HTMLOrSVGElement> {
}

export function Arrow ({ ...props }: Props) {
  return (
    <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m4.5 8.5-4-4 4-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(7 6)"/></svg>
  )
}
