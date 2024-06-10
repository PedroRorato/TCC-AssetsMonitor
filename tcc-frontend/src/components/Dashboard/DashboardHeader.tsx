import { ReactNode } from "react"

interface DashboardHeaderProps {
  children: ReactNode
}

const DashboardHeader = ({ children }: DashboardHeaderProps) => {
  return (
    <header className="d-flex justify-content-between w-100 mb-3">
      <h2>{children}</h2>
    </header>
  )
}

export default DashboardHeader