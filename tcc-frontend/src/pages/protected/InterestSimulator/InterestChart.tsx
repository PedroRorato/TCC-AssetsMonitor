import { ResponsiveLine } from '@nivo/line'
// Types
import { ChartLineType } from '@/types'
// Components
import { Card } from '@/components/ui'

interface InterestChartProps {
  chartData: ChartLineType[]
}

// Main
const InterestChart = ({ chartData }: InterestChartProps) => (
  <Card className='h-400 mb-4'>
    <ResponsiveLine
      animate
      curve="monotoneX"
      data={chartData}
      enableSlices="x"
      enableTouchCrosshair
      margin={{
        bottom: 30,
        left: 50,
        right: 20,
        top: 20
      }}
      yScale={{
        stacked: false,
        type: 'linear'
      }}
    />
  </Card>
)

export default InterestChart