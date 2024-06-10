import { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
// Types
import { StockType } from '@/types';
// Services
import api from "@/services/api"
import { orderStockList } from '@/utils/helpers';
// Components
import { Button, Card, Input, SelectStock } from "@/components/ui"
import { stockList } from '@/utils/stock-list';


const PurchaseForm = () => {
  const [stocks, setStocks] = useState<StockType[]>([]);
  const [total, setTotal] = useState<number>(0);

  const methods = useForm();

  // Calculate Total
  const { watch } = methods;
  const price = watch('price', 0)
  const amount = watch('amount', 0)
  useEffect(() => {
    const multiply = price * amount
    if (isNaN(multiply)) setTotal(0)
    else setTotal(multiply)
  }, [price, amount])

  // Order StockList
  useEffect(() => {
    const orderedList = orderStockList(stockList)
    setStocks(orderedList)
  }, [])

  const onSubmit = async (data: any) => {
    console.log(data);
    const company = data.company.split('|');

    await api.post("purchases", {
      ticker: company[0],
      name: company[1],
      price: data.price,
      amount: data.amount,
      date: data.date,
      total,
    })
  }

  return (
    <FormProvider {...methods}>
      <Card>
        <form onSubmit={methods.handleSubmit(onSubmit)}>

          <SelectStock
            className='mb-4'
            label='Ticker'
            name='company'
            options={stocks}
            rules={{ required: "This field is required." }}
          />

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
              label='Preço'
              name='price'
              type='number'
              step={0.01}
              rules={{ required: "This field is required.", valueAsNumber: true }}
            />

            <Input
              className='col-4'
              label='Quantidade'
              name='amount'
              type='number'
              step={0.01}
              rules={{ required: "This field is required.", valueAsNumber: true }}
            />
          </div>


          <div className='d-flex justify-content-between'>
            <Button type='submit'>Adicionar</Button>
            <h3>Total: R$ {total.toFixed(2)}</h3>
          </div>

        </form>
      </Card>
    </FormProvider>
  )
}

export default PurchaseForm