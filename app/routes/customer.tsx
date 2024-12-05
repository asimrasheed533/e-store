import React from "react";
import { Outlet } from "react-router";
import CustomerDashboardHeader from "~/components/CustomerDashboardHeader";
import CustomerDashboardSidebar from "~/components/CustomerDashboardSidebar";

export default function Customer() {
  return (
    <div>
      <div className="dashboard">
        <CustomerDashboardSidebar />
        <div className="dashboard__main">
          <CustomerDashboardHeader />
          <div className="dashboard__main__content">
            <div className="dashboard__main__content__inner">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
