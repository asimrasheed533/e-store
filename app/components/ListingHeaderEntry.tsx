import { CSSProperties, ReactNode } from "react";

import AscendingIcon from "icons/AscendingIcon";
import DescendingIcon from "icons/DescendingIcon";

interface IListingHeaderEntry {
  className?: string;
  children: ReactNode;
  sortKey?: string;
  sortData?: {
    key: string;
    order: "asc" | "desc";
  };
  onSort?: (data: { key: string; order: "asc" | "desc" }) => void;
  style?: CSSProperties;
  hasImage?: boolean;
}

export default function ListingHeaderEntry({
  className,
  children,
  sortKey,
  sortData,
  onSort,
  style,
  hasImage,
}: IListingHeaderEntry) {
  return (
    <div
      style={style}
      className={
        "listing__page__table__header__entry " +
        (hasImage ? "has__image" : "") +
        (className || "")
      }
    >
      {children}
      {sortKey && sortData && (
        <button
          type="button"
          onClick={() => {
            if (onSort) {
              onSort({
                key: sortKey,
                order: sortData?.order === "asc" ? "desc" : "asc",
              });
            }
          }}
          className="listing__page__table__header__entry__sort"
        >
          {sortData?.key === sortKey ? (
            sortData.order === "asc" ? (
              <AscendingIcon />
            ) : (
              <DescendingIcon />
            )
          ) : (
            <svg
              width="7"
              height="13"
              viewBox="0 0 7 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.77919 0.986328L6.38225 5.49496H1.17613L3.77919 0.986328Z"
                fill="#AEB9E1"
              />
              <path
                d="M3.7794 13.0098L1.17634 8.50113L6.38246 8.50113L3.7794 13.0098Z"
                fill="#AEB9E1"
              />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}
