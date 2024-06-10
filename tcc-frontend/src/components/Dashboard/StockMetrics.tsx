import InfoCard from './InfoCard'

interface StockMetricsProps {
  metrics: any
}

const StockMetrics = ({ metrics }: StockMetricsProps) => {
  return (
    <>
      <hr />

      <h3 className="d-flex mb-3">Índices</h3>

      <div className="d-flex flex-wrap mb-4 ">
        <InfoCard title="P/L" description={metrics['P/L']} />
        <InfoCard title="P/VP" description={metrics['P/VP']} />
        <InfoCard title="ROE" description={metrics['ROE']} />
        <InfoCard title="ROIC" description={metrics['ROIC']} />
        <InfoCard title="Mrg Ebit." description={metrics['Mrg Ebit']} />
        <InfoCard title="Mrg Líq." description={metrics['Mrg. Líq.']} />
        <InfoCard title="EV/EBIT" description={metrics['EV/EBIT']} />
        <InfoCard title="EV/EBITDA" description={metrics['EV/EBITDA']} />
      </div>
    </>
  )
}

export default StockMetrics