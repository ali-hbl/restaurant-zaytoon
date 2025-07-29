import { useEffect, useContext } from 'react';
import useFetch from '../../hooks/useFetch';
import { UserContext } from 'context/usercontext';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import DashboardSidebar from './components/DashboardSidebar/DashboardSidebar';
import './styles.scss';

const Dashboard = () => {
  const { currentUser } = useContext(UserContext);
  const { data } = useFetch(`users/role/${currentUser.uid}`);
  const userRole = data.results?.[0]?.role ?? '';

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    // redirect user to the homepage if userRole is defined and not 'admin'
    if (userRole && userRole !== 'admin') navigate('/');
  }, [userRole, navigate]);

  return (
    <div className="dashboard">
      <DashboardSidebar />
      <div className="main-content">
        {pathname === '/back-office' && (
          <>
            <h2>Gérer le contenu de votre restaurant</h2>
            <p>
              Vous êtes connecté en tant qu'administrateur. Vous pouvez gérer tout le contenu de votre restaurant ici.
            </p>
          </>
        )}

        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
