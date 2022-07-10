import { ButtonCustom } from './Button.styled'

const Button = ({ disabled, onClick = () => {}, children, ...props }) => {
  return (
    <ButtonCustom disabled={disabled} onClick={onClick} {...props}>
      {children}
    </ButtonCustom>
  )
}

export default Button
