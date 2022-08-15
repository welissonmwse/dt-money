import { useContext } from 'use-context-selector'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}
