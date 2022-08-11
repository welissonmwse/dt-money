import * as C from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import LogoImg from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header(){
  return (
    <C.HeaderContainer>
      <C.HeaderContent>
        <img src={LogoImg} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <C.NewTransactionButton>Nova transação</C.NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </C.HeaderContent>
    </C.HeaderContainer>
  )
}