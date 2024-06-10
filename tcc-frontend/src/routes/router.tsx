import { createBrowserRouter } from 'react-router-dom';
// Pages
import HomePage from '../pages/public/HomePage/HomePage';
import { WalletPage } from '../pages/protected/WalletPage';
import { StockPage } from '../pages/protected/StockPage';
import { AddRegister } from '../pages/protected/AddRegister';
import { HistoryPage } from '../pages/protected/HistoryPage';
import { InterestSimulator } from '../pages/protected/InterestSimulator';
import { RankingsPage } from '../pages/protected/Rankings';
// Helpers
import ProtectedRoute from './ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <h1>Error Page</h1>,
  },
  {
    path: '/login',
    element: <h1>Login</h1>,
    errorElement: <h1>Error Page</h1>,
  },
  {
    path: '/protected',
    element: (
      <ProtectedRoute>
        <h1>Protected</h1>
      </ProtectedRoute>
    ),
  },
  {
    path: '/dashboard',
    errorElement: <h1>Error Page dash</h1>,
    children: [
      {
        path: '',
        element: <WalletPage />,
        errorElement: <h1>Error Wallet</h1>,
      },
      {
        path: 'stocks/:ticker',
        element: <StockPage />,
        errorElement: <h1>Error StockPage</h1>,
      },
      {
        path: 'add-register',
        element: <AddRegister />,
        errorElement: <h1>Error AddRegister</h1>,
      },
      {
        path: 'history',
        element: <HistoryPage />,
        errorElement: <h1>Error History</h1>,
      },
      {
        path: 'interest-simulator',
        element: <InterestSimulator />,
        errorElement: <h1>Error Interest Simulator</h1>,
      },
      {
        path: 'rankings',
        element: <RankingsPage />,
        errorElement: <h1>Error Rankings Page</h1>,
      }
    ]
  },

]);

export default router;