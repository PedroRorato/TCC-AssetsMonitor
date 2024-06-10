import { Link } from 'react-router-dom';

interface DashboardMenuButton {
  name: string;
  url: string;
  selected?: boolean;
}

const DashboardMenuButton = ({ name, url, selected = false }: DashboardMenuButton) => {
  const selectedStyle = selected ? ' selected' : '';

  return (
    <Link to={url} className={`dashboard-menu-button ${selectedStyle}`}>{name}</Link>
  )
}

export default DashboardMenuButton