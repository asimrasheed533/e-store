import { Outlet } from "react-router";
import AdminDashboardHeader from "~/components/AdminDashboardHeader";
import AdminDashboardSidebar from "~/components/AdminDashboardSidebar";

export default function Admin() {
  return (
    <div>
      <div className="dashboard">
        <AdminDashboardSidebar />
        <div className="dashboard__main">
          <AdminDashboardHeader />
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
