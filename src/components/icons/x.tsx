import type { SVGAttributes } from 'react'
interface Props extends SVGAttributes<HTMLOrSVGElement> {
}

export function X ({ ...props }: Props) {
  return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M25.2013 1.53711H30.108L19.388 13.7904L32 30.4611H22.1253L14.392 20.3491L5.54133 30.4611H0.632L12.0987 17.3544L0 1.53844H10.1253L17.116 10.7811L25.2013 1.53711ZM23.48 27.5251H26.1987L8.648 4.31978H5.73067L23.48 27.5251Z" fill="white" />
        </svg>
  )
}
