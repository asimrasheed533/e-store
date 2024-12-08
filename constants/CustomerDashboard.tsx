import GeneralIcon from "icons/GeneralIcon";
export const SideBarLink = [
  {
    name: "Dashboard",
    path: "",
    icon: <GeneralIcon />,
    children: [
      {
        name: "Customers",
        path: "/customer",
      },

      {
        name: "Products",
        path: "/product",
      },
      {
        name: "Products",
        path: "/product2",
      },
    ],
  },
  {
    name: "Orders",
    path: "",
  },
];
