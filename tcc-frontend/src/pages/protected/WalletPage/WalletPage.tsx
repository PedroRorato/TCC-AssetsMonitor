import { useEffect, useState } from "react"
// Types
import type { StockType } from "@/types"
// Services
import api from "@/services/api"
// Components
import { DashboardHeader, DashboardLayout, StocksTable } from "@/components/Dashboard"


// Main Component
const WalletPage = () => {
  const [stocks, setStocks] = useState<StockType[]>([]);

  useEffect(() => {
    getStocks();
  }, []);

  const getStocks = async () => {
    const { data } = await api.get("stocks");
    setStocks(data);
  }

  return (
    <DashboardLayout>
      <DashboardHeader>Minha Carteira</DashboardHeader>

      <StocksTable stocks={stocks} />
    </DashboardLayout>
  )
}

export default WalletPage;