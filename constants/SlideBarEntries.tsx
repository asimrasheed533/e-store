import GeneralIcon from "icons/GeneralIcon";
export const SideBarLink = [
  {
    name: "Dashboard",
    path: "",
    icon: <GeneralIcon />,
    children: [
      {
        name: "Products",
        path: "/customer/products",
      },

      {
        name: "Order",
        path: "/order",
      },
      {
        name: "Users",
        path: "/users",
      },
    ],
  },
  {
    name: "Orders",
    path: "",
  },
];
export const AdminSideBarLink = [
  {
    name: "Admin",
    path: "",
    icon: <GeneralIcon />,
  },
  {
    name: "Orders",
    path: "",
  },
];
