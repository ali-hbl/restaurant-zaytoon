import React from 'react';
import chef1 from '../../backend/images/chef1.jpg';
import chef2 from '../../backend/images/chef2.jpg';
import chef3 from '../../backend/images/chef3.jpg';
import { FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './styles.scss';

const Team = () => {
  return (
    <div className="our-team">
      <h1 className="header">Nos talentueux chefs</h1>

      <div className="our-chef">
        <div className="chef-card">
          <div className="chef-card-image">
            <img src={chef1} alt="Chef" />
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
            <img src={chef2} alt="Chef" />
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
            <img src={chef3} alt="Chef" />
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
