import { useNavigate } from 'react-router-dom'
import { ROUTER } from '../../router/config'

export const Logo = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate(ROUTER.HOME_PAGE)
  }

  return (
    <div onClick={onClick}>Thiên</div>
  )
}
