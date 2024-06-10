import { useEffect, useState } from "react"
// Types
import type { MagicFormulaType, SellType } from "@/types"
// Services
import api from "@/services/api"
// Components
import { DashboardHeader, DashboardLayout, SellsTable } from "@/components/Dashboard"
import RankingSwitch from "./RankingSwitch";
import MagicFormulaTable from './MagicFormulaTable'


// Main Component
const RankingsPage = () => {
  const [ranking, setRanking] = useState<"magic-formula" | "sharpe-ratio">("magic-formula");
  const [magicFormulaRanking, setMagicFormulaRanking] = useState<MagicFormulaType[]>([]);
  const [sells, setSells] = useState<SellType[]>([]);

  useEffect(() => {
    getMagicFormula();
    getSells();
    console.log(sells, magicFormulaRanking);

  }, []);

  const getMagicFormula = async () => {
    const { data } = await api.get("magic-formula");
    setMagicFormulaRanking(data)
  }

  const getSells = async () => {
    const { data } = await api.get("sells");
    setSells(data)
  }

  return (
    <DashboardLayout >

      <DashboardHeader>
        Ranking {ranking === "magic-formula" ? 'Magic Formula' : 'Índice de Sharpe'}
      </DashboardHeader>

      <RankingSwitch
        ranking={ranking}
        setRanking={setRanking}
      />

      {ranking === "magic-formula" && <MagicFormulaTable stocks={magicFormulaRanking} />}

      {ranking === "sharpe-ratio" && <SellsTable sells={sells} />}

    </DashboardLayout >
  )
}

export default RankingsPage