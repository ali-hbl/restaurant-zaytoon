import React from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai';
import { MdRestaurantMenu } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const DashboardSidebar = () => {
  return (
    <div className="dashboard-sidebar">
      <ul>
        <li>
          <AiOutlineHome />
          <NavLink to="/back-office">Tableau de bord</NavLink>
        </li>
        <li>
          <MdRestaurantMenu />
          <NavLink to="/back-office/catalogue">Catalogue</NavLink>
        </li>
        <li>
          <AiOutlineClockCircle />
          <NavLink to="/back-office/orders">Commandes</NavLink>
        </li>
        <li>
          <AiOutlineCalendar />
          <NavLink to="/back-office/reservations">Réservations</NavLink>
        </li>
        <li>
          <AiOutlineUser />
          <NavLink to="/back-office/users">Utilisateurs</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
