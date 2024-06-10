import { useNavigate } from "react-router-dom"
import { FaEye } from 'react-icons/fa';
// Types
import type { StockType } from "@/types"
// Components
import { Button } from "@/components/ui";
import Table from "./Table"


interface StocksTableProps {
  stocks: StockType[]
}

const stockHeaders = ['Ticker', 'Empresa', 'Preço Médio', 'Qtd', 'Total Investido', '']

// Main
const StocksTable = ({ stocks }: StocksTableProps) => {
  const navigate = useNavigate();

  const goTo = (ticker: string) => {
    navigate(`stocks/${ticker}`)
  }

  return (
    <Table headers={stockHeaders}>
      {stocks.map(stock => {
        const total = stock.amount * stock.average_purchase_price;
        return (
          <tr key={stock.id}>
            <td>{stock.ticker}</td>
            <td>{stock.name}</td>
            <td>R$ {stock.average_purchase_price?.toFixed(2)}</td>
            <td>{stock.amount}</td>
            <td>R$ {total.toFixed(2)}</td>
            <td className="text-end">
              <Button onClick={() => goTo(stock.ticker)}><FaEye /></Button>
            </td>
          </tr>
        )
      })}
    </Table>
  )
}

export default StocksTable