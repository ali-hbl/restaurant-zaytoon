import { NavLink } from 'react-router-dom';
import './styles.scss';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h3 className="header">Oups, cette page n'existe pas!</h3>
      <NavLink to="/">Revenir à l'accueil</NavLink>
    </div>
  );
};

export default ErrorPage;
