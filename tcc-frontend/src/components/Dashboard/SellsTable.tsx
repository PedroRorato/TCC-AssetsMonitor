// Types
import type { SellType } from "@/types"
// Custom Components
import Table from "./Table"


interface SellsTableProps {
  sells: SellType[]
}

const sellHeaders = ['Data', 'Ticker', 'Preço Médio', 'Preço de Venda', 'Rentabilidade', 'Qtd', 'Lucro Total']

const SellsTable = ({ sells }: SellsTableProps) => {
  return (
    <Table headers={sellHeaders}>
      {sells.map(sell => (
        <tr
          className={sell.share_profitability > 0 ? 'table-success' : 'table-danger'}
          key={sell.id}
        >
          <td>{sell.date}</td>
          <td>{sell.ticker}</td>
          <td>R$ {sell.average_purchase_price.toFixed(2)}</td>
          <td>R$ {sell.sell_price.toFixed(2)}</td>
          <td><b>{sell.share_profitability.toFixed(2)}%</b></td>
          <td>{sell.amount}</td>
          <td><b>R$ {sell.total_profit.toFixed(2)}</b></td>
        </tr>
      ))}
    </Table>
  )
}

export default SellsTable