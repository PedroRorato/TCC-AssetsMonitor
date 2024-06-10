import { useState } from 'react'
// Types
import { ChartLineType, InterestType } from '@/types'
// Components
import { DashboardHeader, DashboardLayout } from "@/components/Dashboard"
import InterestChart from './InterestChart'
import InterestForm from './InterestForm'
import InterestTable from './InterestTable'


// Main
const InterestSimulator = () => {

  const [chartData, setChartData] = useState<ChartLineType[]>([])
  const [tableData, setTableData] = useState<InterestType[]>([])

  const addChartLine = (chart: ChartLineType) => {
    setChartData(charts => [...charts, chart])
  }

  const addTableData = (tableLine: InterestType) => {
    console.log('tableLine', tableLine);

    setTableData(lines => [...lines, tableLine])
  }

  return (
    <DashboardLayout>
      <DashboardHeader>Simulador de Juros</DashboardHeader>

      <InterestForm
        count={chartData.length}
        addChartLine={addChartLine}
        addTableData={addTableData}
      />

      {(chartData.length > 0) && <InterestChart chartData={chartData} />}

      {(tableData.length > 0) && <InterestTable tableData={tableData} />}
    </DashboardLayout>
  )
}

export default InterestSimulator;