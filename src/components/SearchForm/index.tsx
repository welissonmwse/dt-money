import { MagnifyingGlass } from 'phosphor-react'
import * as C from './styles'

export function SearchForm(){
  return(
    <C.SearchFormContainer>
      <input type="text" placeholder='Busque por transações'/>

      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </C.SearchFormContainer>
  )
}