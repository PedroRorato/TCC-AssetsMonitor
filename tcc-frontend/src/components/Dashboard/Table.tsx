import { ReactNode } from 'react'
// Custom Components
import { Card } from '@/components/ui'

interface TableProps {
  headers: string[],
  children: ReactNode,
}

const Table = ({ headers, children }: TableProps) => {


  return (
    <Card>
      <table className="table">
        <thead>
          <tr>
            {headers.map((header, index) => <th key={index}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </Card>
  )
}

export default Table