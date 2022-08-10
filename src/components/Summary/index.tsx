import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import * as C from './styles'

export function Summary(){
  return (
    <C.SummaryContainer>
      <C.SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e"/>
        </header>
        <strong>R$ 17.400,00</strong>
      </C.SummaryCard>
      <C.SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68"/>
        </header>
        <strong>R$ 17.400,00</strong>
      </C.SummaryCard>
      <C.SummaryCard variant="green-700">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff"/>
        </header>
        <strong>R$ 17.400,00</strong>
      </C.SummaryCard>
    </C.SummaryContainer>
  )
}