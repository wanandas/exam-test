import { CardCustom } from './Card.styled'

export const Card = ({ title, extra, ...props }) => {
  return <CardCustom title={title} extra={extra} {...props}></CardCustom>
}

export default Card
