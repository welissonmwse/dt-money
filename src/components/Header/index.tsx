import * as C from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import LogoImg from '../../assets/logo.svg'

export function Header(){
  return (
    <C.HeaderContainer>
      <C.HeaderContent>
        <img src={LogoImg} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <C.NewTransactionButton>Nova transação</C.NewTransactionButton>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
              <Dialog.Close />
              <Dialog.Title>Nova transação</Dialog.Title>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </C.HeaderContent>
    </C.HeaderContainer>
  )
}