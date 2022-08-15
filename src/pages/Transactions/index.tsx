import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'

import * as C from './styles'

export function Transactions() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions,
  )

  return (
    <div>
      <Header />
      <Summary />
      <C.TransactionsContainer>
        <SearchForm />
        <C.TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>
                <td>
                  <C.PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </C.PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </C.TransactionsTable>
      </C.TransactionsContainer>
    </div>
  )
}
