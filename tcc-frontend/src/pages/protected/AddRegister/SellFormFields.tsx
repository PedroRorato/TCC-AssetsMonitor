// Types
import { StockType } from '@/types';
// Components
import { Input } from "@/components/ui";

interface StockDataProps {
  stock: StockType
}

const SellFormFields = ({ stock }: StockDataProps) => {
  return (
    <div className='row mb-4'>
      <Input
        className='col-4'
        label='Data'
        name='date'
        type='date'
        rules={{ required: "This field is required." }}
      />

      <Input
        className='col-4'
        label='Preço de Venda (R$)'
        name='price'
        type='number'
        step={0.01}
        rules={{ required: "This field is required.", valueAsNumber: true }}
      />

      <Input
        className='col-4'
        label={`Quantidade (${stock.amount})`}
        name='amount'
        type='number'
        step={0.01}
        max={stock.amount}
        rules={{ required: "This field is required.", valueAsNumber: true, max: stock.amount }}
      />
    </div>
  )
}

export default SellFormFields