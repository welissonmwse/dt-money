import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import * as C from './styles'

export function Summary(){
  const {transactions} = useContext(TransactionsContext)

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === "income"){
      acc.income += transaction.price
      acc.total += transaction.price
    } else {
      acc.outcome += transaction.price
      acc.total -= transaction.price
    }

    return acc
  },{
    income: 0,
    outcome: 0,
    total: 0
  })
  return (
    <C.SummaryContainer>
      <C.SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e"/>
        </header>
        <strong>{summary.income}</strong>
      </C.SummaryCard>
      <C.SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68"/>
        </header>
        <strong>{summary.outcome}</strong>
      </C.SummaryCard>
      <C.SummaryCard variant="green-700">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff"/>
        </header>
        <strong>{summary.total}</strong>
      </C.SummaryCard>
    </C.SummaryContainer>
  )
}