import { Icon } from '@chakra-ui/react'

type Props = {
  width?: string | number
  height?: string | number
  color: string
}
export const Facebook = ({ color, height = 18, width = 18 }: Props) => (
  <Icon viewBox="0 0 50 50" fill={color} w={width} h={height}>
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z" />
  </Icon>
)
