import { useEffect, useState } from "react"
// Types
import type { PurchaseType, SellType } from "@/types"
// Services
import api from "@/services/api"
// Components
import {
  DashboardHeader,
  DashboardLayout,
  DashboardSwitch,
  PurchasesTable,
  SellsTable
} from "@/components/Dashboard"


// Main Component
const HistoryPage = () => {
  const [displayPurchases, setDisplayPurchases] = useState<boolean>(true);
  const [purchases, setPurchases] = useState<PurchaseType[]>([]);
  const [sells, setSells] = useState<SellType[]>([]);

  useEffect(() => {
    getPurchases();
    getSells();
    console.log(sells, purchases);

  }, []);

  const getPurchases = async () => {
    const { data } = await api.get("purchases");
    setPurchases(data)
  }

  const getSells = async () => {
    const { data } = await api.get("sells");
    setSells(data)
  }

  return (
    <DashboardLayout >

      <DashboardHeader>
        Histórico {displayPurchases ? 'Compras' : 'Vendas'}
      </DashboardHeader>

      <DashboardSwitch
        displayPurchases={displayPurchases}
        setDisplayPurchases={setDisplayPurchases}
      />

      {displayPurchases && <PurchasesTable purchases={purchases} />}

      {!displayPurchases && <SellsTable sells={sells} />}

    </DashboardLayout >
  )
}

export default HistoryPage