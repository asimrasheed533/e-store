import { CSSProperties, ReactNode } from "react";

export interface IListingAction {
  name: string;
  onClick: () => void;
  icon: ReactNode;
  danger?: boolean;
  disabled?: boolean;
  sale?: boolean;
}

export interface IListingTable {
  style?: Object;
  children: ReactNode;
  actions?: IListingAction[];
  selectedRows?: string[];
  setSelectedRows?: (value: string[]) => void;
  totalPages?: number;
  sortData?: {
    key: string;
    order: "asc" | "desc";
  };
  setSortData?: (value: { key: string; order: "asc" | "desc" }) => void;
  headerItems: {
    key: string;
    name: string;
    nameAr: string;
    hasImage?: boolean;
    style?: CSSProperties;
  }[];
  data: any[];
  onAdd?: () => void;
  isFetchingData?: boolean;
  isStale?: boolean;
  noCheckbox?: boolean;
}
export interface IListingTabs {
  tabs: {
    name: string;
    number: number;
  }[];
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}
