import { Button } from "@/components/ui"

interface DashboardSwitchProps {
  displayPurchases: boolean,
  setDisplayPurchases: (state: boolean) => void,
}

const DashboardSwitch = ({ displayPurchases, setDisplayPurchases }: DashboardSwitchProps) => {
  return (
    <div className="mb-3">
      <Button
        className="me-3"
        variants={displayPurchases ? 'primary' : 'secondary'}
        onClick={() => setDisplayPurchases(true)}
      >
        Compra
      </Button>
      <Button
        variants={!displayPurchases ? 'primary' : 'secondary'}
        onClick={() => setDisplayPurchases(false)}
      >
        Venda
      </Button>
    </div>
  )
}

export default DashboardSwitch