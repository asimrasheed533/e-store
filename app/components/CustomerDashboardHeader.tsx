import { Router } from "react-router";

export default function CustomerDashboardHeader() {
  return (
    <div className="dashboard__main__header">
      <div className="dashboard__main__header__title">
        <button
          type="button"
          // onClick={() => Router.back()}
          className="dashboard__main__header__title__back"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-left"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        icon
        <div className="dashboard__main__header__title__text">Label</div>
      </div>
    </div>
  );
}
