import { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom';
// Services | Utils
import api from "@/services/api"
import { getProfitability } from "@/utils/helpers";
// Components
import {
  DashboardHeader,
  DashboardLayout,
  DashboardSwitch,
  InfoCard,
  PurchasesTable,
  SellsTable,
  StockMetrics
} from "@/components/Dashboard"


// Main Component
const StockPage = () => {
  const [displayPurchases, setDisplayPurchases] = useState<boolean>(true);
  const [stockInfo, setStockInfo] = useState<any>(null);

  const { pathname } = useLocation();

  useEffect(() => {
    getStockInfo();
    console.log(pathname);
  }, [pathname]);

  const getStockInfo = async () => {
    const ticker = pathname.split('/')[3]
    const { data } = await api.get(`stocks/${ticker}`);
    const { amount, average_purchase_price: price } = data.stock
    const { profitability, investedTotal, currentTotal } = getProfitability(amount, price, data.metrics['Cotação'])
    data.profitability = profitability
    data.investedTotal = investedTotal
    data.currentTotal = currentTotal
    console.log('stockInfo: ', data);
    setStockInfo(data)
  }

  console.log(stockInfo);


  return (
    <DashboardLayout>
      {stockInfo !== null && (
        <>
          <DashboardHeader>
            {stockInfo.stock.ticker} - {stockInfo.stock.name}
          </DashboardHeader>

          <hr />

          <div className="d-flex mb-4 flex-wrap">
            <InfoCard
              title="Preço Compra"
              description={`R$ ${stockInfo.stock.average_purchase_price.toFixed(2)}`}
            />
            <InfoCard
              title="Preço Atual"
              description={`R$ ${stockInfo.metrics['Cotação']}`}
            />
            <InfoCard title="Quantidade" description={stockInfo.stock.amount} />
            <InfoCard
              title="Total Investido"
              description={`R$ ${stockInfo.investedTotal}`}
            />
            <InfoCard
              title="Total Atualizado"
              description={`R$ ${stockInfo.currentTotal}`}
            />
            <InfoCard
              title="Rentabilidade"
              description={`${stockInfo.profitability}%`}
            />
          </div>

          <StockMetrics metrics={stockInfo.metrics} />

          <hr />

          <h3 className="d-flex mb-3">Registros</h3>

          <DashboardSwitch
            displayPurchases={displayPurchases}
            setDisplayPurchases={setDisplayPurchases}
          />

          {displayPurchases && <PurchasesTable purchases={stockInfo.purchases} />}

          {!displayPurchases && <SellsTable sells={stockInfo.sells} />}

        </>
      )}
    </DashboardLayout>
  )
}

export default StockPage