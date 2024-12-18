import React, { useState, useContext } from 'react';
import axios from 'axios';
import './ClientHam.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { MyContext } from '../../context';

const PendingMeetsMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [pendingMeets, setPendingMeets] = useState([]);
  const { user } = useContext(MyContext);


  const fetchPendingMeets = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/appointments?client_username=${user}`
      );
      console.log(response.data); // Debug response
      setPendingMeets(response.data.data);
    } catch (error) {
      console.error('Error fetching pending meets:', error);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      fetchPendingMeets();
    }
  };

  return (
    <div className="menu-container">
      <button className="hamburger-icon" onClick={toggleMenu}>
        <RxHamburgerMenu />
      </button>

      {isMenuOpen && (
        <div className="menu-content">
          <h2>My Profile</h2>
          {pendingMeets.length > 0 ? (
            pendingMeets.map((meet, index) => (
              <div key={meet._id || index} className="meet-card">
                <h3 className="meet-title">Client: {meet.client_username}</h3>
                <p>
                  <strong>Date:</strong> {meet.timestamp}
                </p>
                <div className="button-group">
                  <button className="join-btn" onClick={() => window.open(meet.meetlink, '_blank')}>
                    JOIN
                  </button>
                  <button className="cancel-btn" onClick={() => console.log(`Cancel ${meet._id}`)}>
                    CANCEL
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No pending meets available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PendingMeetsMenu;
