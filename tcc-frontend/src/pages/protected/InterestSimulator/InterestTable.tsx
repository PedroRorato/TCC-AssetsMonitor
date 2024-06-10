// Styles
import type { InterestType } from '@/types'
// Components
import { Table } from '@/components/Dashboard'

interface InterestTableProps {
  tableData: InterestType[]
}

const interestHeaders = ['ID', 'Inicial', 'Aporte mensal', 'Juros', 'Meses', 'Total']


const InterestTable = ({ tableData }: InterestTableProps) => {
  return (
    <Table headers={interestHeaders}>
      {tableData.map(line => (
        <tr key={line.id} >
          <td>{line.id}</td>
          <td>R$ {line.initial.toFixed(2)}</td>
          <td>R$ {line.monthly.toFixed(2)}</td>
          <td>{line.interest.toFixed(2)}%</td>
          <td>{line.months}</td>
          <td><b>R$ {line.total.toFixed(2)}</b></td>
        </tr>
      ))}
    </Table>
  )
}

export default InterestTable