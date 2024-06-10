// Types
import { StockType } from '@/types';
// Components
import { InfoCard } from "@/components/Dashboard";

interface StockDataProps {
  stock: StockType
}

const StockData = ({ stock }: StockDataProps) => (
  <div className='d-flex justify-content-center'>
    <InfoCard title="Preço Médio de Compra" description={`R$ ${stock.average_purchase_price?.toFixed(2)}`} />
    <InfoCard title="Quantidade" description={`${stock.amount}`} />
  </div>
)

export default StockData;