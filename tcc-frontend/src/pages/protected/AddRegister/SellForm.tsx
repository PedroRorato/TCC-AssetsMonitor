import { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
// Types
import { StockType } from '@/types';
// Services
import api from "@/services/api"
import { orderStockList } from '@/utils/helpers';
// Components
import { Button, Card, SelectStock } from "@/components/ui"
import StockData from './StockData';
import SellFormFields from './SellFormFields';


// Main
const SellForm = () => {
  const [stockData, setStockData] = useState<StockType | null>(null);
  const [stocks, setStocks] = useState<StockType[]>([]);
  const [total, setTotal] = useState<number>(0);

  const methods = useForm();
  const { watch } = methods;

  // Get Company Data
  const company = watch('company', '')
  useEffect(() => {
    const ticker = company.split('|')[0];
    const stock = stocks.filter(stock => stock.ticker === ticker)[0];
    setStockData(stock)
  }, [company]);

  // Calculate Total
  const price = watch('price', 0)
  const amount = watch('amount', 0)
  useEffect(() => {
    const multiply = price * amount
    if (isNaN(multiply)) setTotal(0)
    else setTotal(multiply)
  }, [price, amount]);

  // Order StockList
  useEffect(() => {
    getStockList();
  }, []);

  // Get StockList
  const getStockList = async () => {
    const { data } = await api.get("stocks");
    const orderedList = orderStockList(data);
    orderedList.unshift({ ticker: '', name: '-- Selecione o Ticker --' })
    setStocks(orderedList);
  }

  // Submit function
  const onSubmit = async (data: any) => {
    console.log(data);
    const company = data.company.split('|');

    await api.post("sells", {
      ticker: company[0],
      name: company[1],
      average_purchase_price: stockData?.average_purchase_price,
      sell_price: data.price,
      amount: data.amount,
      date: data.date,
    });
  }

  return (
    <FormProvider {...methods}>
      <Card>
        <form onSubmit={methods.handleSubmit(onSubmit)}>

          <SelectStock
            className='mb-3'
            label='Ticker'
            name='company'
            options={stocks}
            rules={{ required: "This field is required." }}
          />

          {stockData && <StockData stock={stockData} />}

          {stockData && <SellFormFields stock={stockData} />}

          <div className='d-flex justify-content-between'>
            <Button type='submit'>Adicionar</Button>
            <h3>Total: R$ {total.toFixed(2)}</h3>
          </div>

        </form>
      </Card>
    </FormProvider>
  )
}

export default SellForm;