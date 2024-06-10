import { useState } from "react"
// Components
import { DashboardHeader, DashboardLayout, DashboardSwitch } from "@/components/Dashboard"
import PurchaseForm from "./PurchaseForm";
import SellForm from "./SellForm";


const AddRegister = () => {
  const [displayPurchases, setDisplayPurchases] = useState<boolean>(true);

  return (
    <DashboardLayout>

      <DashboardHeader>
        Adicionar Registro {displayPurchases ? 'de Compra' : 'de Venda'}
      </DashboardHeader>

      <DashboardSwitch
        displayPurchases={displayPurchases}
        setDisplayPurchases={setDisplayPurchases}
      />

      {displayPurchases && <PurchaseForm />}

      {!displayPurchases && <SellForm />}

    </DashboardLayout>
  )
}

export default AddRegister