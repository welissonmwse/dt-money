import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import * as z from 'zod'
import * as C from './styles'

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm(){
  const { register, handleSubmit, formState: {isSubmitting} } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  function handleSearchTransitions(data: SearchFormInputs) {
    console.log(data)
  }

  return(
    <C.SearchFormContainer onSubmit={handleSubmit(handleSearchTransitions)}>
      <input 
        type="text" 
        placeholder='Busque por transações'
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </C.SearchFormContainer>
  )
}