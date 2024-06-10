import React from 'react'
// Types
import { MagicFormulaType } from '@/types'
// Custom Components
import Table from '@/components/Dashboard/Table'

interface MagicFormulaTableProps {
  stocks: MagicFormulaType[]
}

const headers = ['Ranking Final', 'Ticker', 'EV/EBIT', 'Ranking 1', 'ROIC', 'Ranking 2']

const MagicFormulaTable: React.FC<MagicFormulaTableProps> = ({ stocks }) => {
  console.log(stocks[0]);

  return (
    <Table headers={headers}>
      {stocks.map(stock => (
        <tr key={stock.final_ranking}>
          <td>{stock.final_ranking}</td>
          <td>{stock.ticker}</td>
          <td>{stock.ev_ebit}</td>
          <td>{stock.ranking1}</td>
          <td>{stock.roic}</td>
          <td>{stock.ranking2}</td>
        </tr>
      ))}
    </Table>
  )
}

export default MagicFormulaTable