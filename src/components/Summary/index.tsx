import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useSummary } from '../../hooks/useSummary'
import { priceFormatter } from '../../utils/formatter'
import * as C from './styles'

export function Summary(){
  const summary = useSummary()
  
  return (
    <C.SummaryContainer>
      <C.SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e"/>
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </C.SummaryCard>
      <C.SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68"/>
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </C.SummaryCard>
      <C.SummaryCard variant="green-700">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff"/>
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </C.SummaryCard>
    </C.SummaryContainer>
  )
}