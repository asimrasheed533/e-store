import React from "react";

export default function CustomerDashboardSidebar() {
  return (
    <div className="dashboard__sidebar">
      <div className="dashboard__sidebar__content">
        <div className="dashboard__sidebar__content__item">Dashboard</div>
        <div className="dashboard__sidebar__content__item">Orders</div>
        <div className="dashboard__sidebar__content__item">Profile</div>
        <div className="dashboard__sidebar__content__item">Settings</div>
      </div>
    </div>
  );
}
