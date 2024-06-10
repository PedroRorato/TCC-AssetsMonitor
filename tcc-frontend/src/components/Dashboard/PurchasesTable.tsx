// Types
import type { PurchaseType } from "@/types"
// Custom Components
import Table from "./Table"


interface PurchasesTableProps {
  purchases: PurchaseType[]
}

const purchaseHeaders = ['Data', 'Ticker', 'Preço', 'Qtd', 'Total Investido']

const PurchasesTable = ({ purchases }: PurchasesTableProps) => {
  return (
    <Table headers={purchaseHeaders}>
      {purchases.map(purchase => (
        <tr key={purchase.id}>
          <td>{purchase.date}</td>
          <td>{purchase.ticker}</td>
          <td>R$ {purchase.price.toFixed(2)}</td>
          <td>{purchase.amount}</td>
          <td>R$ {purchase.total.toFixed(2)}</td>
        </tr>
      ))}
    </Table>
  )
}

export default PurchasesTable