import React from 'react';
import './Homebox.css';

export const Homebox = () => {
  return (
    <div className="container1">
      <div className="content-box">
        <img
          alt="Real-time information"
          title="Real-time information"
          className="finbyz-icon img-responsive"
          src="https://finbyz.tech/svg/icon%20Real-time%20information.svg"
        />
        <h4 className="content-box-title">HTML5</h4>
        <p className="content-box-sub">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className="content-box">
        <img
          alt="Real-time information"
          title="Real-time information"
          className="finbyz-icon img-responsive"
          src="https://finbyz.tech/svg/icon%20Real-time%20information.svg"
        />
        <h4 className="content-box-title">HTML5</h4>
        <p className="content-box-sub">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
    </div>
  );
};
