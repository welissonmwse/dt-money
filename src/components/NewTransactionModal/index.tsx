import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import * as C from './styles'

export function NewTransactionModal(){
  return(
    <Dialog.Portal>
            <C.Overlay />
            <C.Content>
              <C.CloseButton >
                <X size={24} />
              </C.CloseButton>
              <Dialog.Title>Nova transação</Dialog.Title>
              <form action="">
                <input type="text" placeholder="Descrição" />
                <input type="number" placeholder="Preço" />
                <input type="text" placeholder="Categoria" />

                <button type="submit">Cadastrar</button>
              </form>
            </C.Content>
          </Dialog.Portal>
  )
}