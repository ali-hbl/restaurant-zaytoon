import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './styles.scss';

const Team = () => {
  return (
    <div className="our-team">
      <h1 className="header">Nos talentueux chefs</h1>

      <div className="our-chef">
        <div className="chef-card">
          <div className="chef-card-image">
            <img src={process.env.REACT_APP_BACKEND_URL + 'chef1.jpg'} alt="Chef" />
          </div>

          <div className="chef-info">
            <div>
              <h3>Xiao Ming</h3>
              <span>Chef Nouilles</span>

              <ul>
                <li className="icon-instagram">
                  <FaInstagram />
                </li>
                <li className="icon-twitter">
                  <FaTwitter />
                </li>
                <li className="icon-linkedin">
                  <FaLinkedinIn />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="chef-card">
          <div className="chef-card-image">
          <img src={process.env.REACT_APP_BACKEND_URL + 'chef2.jpg'} alt="Chef" />
          </div>

          <div className="chef-info">
            <div>
              <h3>Xiao Ming</h3>
              <span>Chef Nouilles</span>

              <ul>
                <li className="icon-instagram">
                  <FaInstagram />
                </li>
                <li className="icon-twitter">
                  <FaTwitter />
                </li>
                <li className="icon-linkedin">
                  <FaLinkedinIn />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="chef-card">
          <div className="chef-card-image">
          <img src={process.env.REACT_APP_BACKEND_URL + 'chef3.jpg'} alt="Chef" />
          </div>

          <div className="chef-info">
            <div>
              <h3>Mouloud Achour</h3>
              <span>Chef Harira</span>

              <ul>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaLinkedinIn />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
