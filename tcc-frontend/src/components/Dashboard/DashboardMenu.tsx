import { useLocation } from 'react-router-dom';
// Components
import DashboardMenuButton from './DashboardMenuButton';
// Styles
import './DashboardMenu.styles.scss';
import logo from '@/assets/logo.png';


const menuList = [
  { name: 'Minha Carteira', url: '/dashboard' },
  { name: 'Adicionar Registro', url: '/dashboard/add-register' },
  { name: 'Histórico', url: '/dashboard/history' },
  { name: 'Simulador de Juros', url: '/dashboard/interest-simulator' },
  { name: 'Rankings', url: '/dashboard/rankings' },
];

// Main Function
const DashboardMenu = () => {

  const { pathname } = useLocation();

  return (
    <aside className='dashboard-menu'>

      <div className='dashboard-logo'>
        <img src={logo} className="img-fluid" alt="logo" />
      </div>

      {menuList.map(({ name, url }) => (
        <DashboardMenuButton key={name} name={name} url={url} selected={url === pathname} />
      ))}

    </aside>
  );
}

export default DashboardMenu;