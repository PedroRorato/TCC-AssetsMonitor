import { ReactNode } from "react"
// Components
import DashboardMenu from "./DashboardMenu";
import './DashboardLayout.styles.scss';

interface DashboardLayoutProps {
  children: ReactNode
}

const DashboardLayout = ({
  children
}: DashboardLayoutProps) => {
  return (

    <div className='dashboard-layout'>
      <DashboardMenu />
      <main>
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout