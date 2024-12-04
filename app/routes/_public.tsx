import React from "react";
import { Outlet } from "react-router";
import Header from "~/components/Header";

export default function Public() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
