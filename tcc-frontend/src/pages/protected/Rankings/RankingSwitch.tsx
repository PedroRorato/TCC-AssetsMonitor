import { Button } from "@/components/ui"

interface DashboardSwitchProps {
  ranking: "magic-formula" | "sharpe-ratio",
  setRanking: (state: "magic-formula" | "sharpe-ratio") => void,
}

const RankingSwitch = ({ ranking, setRanking }: DashboardSwitchProps) => {
  return (
    <div className="mb-3">
      <Button
        className="me-3"
        variants={ranking === 'magic-formula' ? 'primary' : 'secondary'}
        onClick={() => setRanking('magic-formula')}
      >
        Magic Formula
      </Button>
      {/* <Button
        variants={ranking === 'sharpe-ratio' ? 'primary' : 'secondary'}
        onClick={() => setRanking('sharpe-ratio')}
      >
        Índice de Sharpe
      </Button> */}
    </div>
  )
}

export default RankingSwitch