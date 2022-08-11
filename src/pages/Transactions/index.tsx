import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";

import * as C from './styles'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

export function Transactions(){
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3333/transactions')
      const data = await response.json()
      setTransactions(data)
    })()
  })
  return (
    <div>
      <Header />
      <Summary />
      <C.TransactionsContainer>
        <SearchForm />
        <C.TransactionsTable>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>
                <td>
                  <C.PriceHighlight variant={transaction.type}>
                    {transaction.price}
                  </C.PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </C.TransactionsTable>
      </C.TransactionsContainer>
    </div>
  )
}