import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";

import * as C from './styles'

export function Transactions(){
  return (
    <div>
      <Header />
      <Summary />
      <C.TransactionsContainer>
        <SearchForm />
        <C.TransactionsTable>
          <tbody>
            <tr>
              <td>Desenvolvimento de site</td>
              <td>
                <C.PriceHighlight variant="income">
                  R$ 12.000,00
                </C.PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td>Humburguer</td>
              <td>
                <C.PriceHighlight variant="outcome">
                  -R$ 20,00
                </C.PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td>Desenvolvimento de site</td>
              <td>
                <C.PriceHighlight variant="income">
                  R$ 12.000,00
                </C.PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td>Desenvolvimento de site</td>
              <td>
                <C.PriceHighlight variant="income">
                  R$ 12.000,00
                </C.PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </C.TransactionsTable>
      </C.TransactionsContainer>
    </div>
  )
}