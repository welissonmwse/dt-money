import * as C from './styles'

import LogoImg from '../../assets/logo.svg'

export function Header(){
  return (
    <C.HeaderContainer>
      <C.HeaderContent>
        <img src={LogoImg} alt="" />
        <C.NewTransactionButton>Nova transação</C.NewTransactionButton>
      </C.HeaderContent>
    </C.HeaderContainer>
  )
}