import { Icon } from '@chakra-ui/react'

type Props = {
  width?: string | number
  height?: string | number
  className: string
}
export const Lock = ({ className, height = 18, width = 18 }: Props) => (
  <Icon xmlns="http://www.w3.org/2000/svg" h={height} viewBox="0 0 24 24" w={width} className={className}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />{' '}
  </Icon>
)
