import React from 'react';
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
        <div className="single__card">
            <div className="card__content">
              <h4>Total Cars</h4>
              <span>50+</span>
            </div>
            <span className='card__icon'>
              <i class="ri-police-car-line"></i>
            </span>
    </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard