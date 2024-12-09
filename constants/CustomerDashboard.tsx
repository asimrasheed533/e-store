import GeneralIcon from "icons/GeneralIcon";
export const SideBarLink = [
  {
    name: "Dashboard",
    path: "",
    icon: <GeneralIcon />,
    children: [
      {
        name: "Products",
        path: "/products",
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
