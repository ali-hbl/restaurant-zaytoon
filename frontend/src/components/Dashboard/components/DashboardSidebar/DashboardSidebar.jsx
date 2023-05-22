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
          <NavLink to="/back-office">
            <span>Tableau de bord</span>
          </NavLink>
        </li>
        <li>
          <MdRestaurantMenu />
          <NavLink to="/back-office/catalogue">
            <span>Catalogue</span>
          </NavLink>
        </li>
        <li>
          <AiOutlineClockCircle />
          <NavLink to="/back-office/orders">
            <span>Commandes</span>
          </NavLink>
        </li>
        <li>
          <AiOutlineCalendar />
          <NavLink to="/back-office/reservations">
            <span>Réservations</span>
          </NavLink>
        </li>
        <li>
          <AiOutlineUser />
          <NavLink to="/back-office/users">
            <span>Utilisateurs</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
