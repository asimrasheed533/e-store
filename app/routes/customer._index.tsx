import ListingTable from "~/components/ListingTable";
import ListingTabs from "~/components/ListingTabs";
import headerItems from "../../data/headerItems.json";
export default function CustomerMain() {
  return (
    <div className="listing__page">
      <div className="listing__page__header">
        <ListingTabs
          selectedTab="orders"
          setSelectedTab={() => {}}
          tabs={[{ name: "Orders", number: 0 }]}
        />
        <div className="listing__page__header__actions">
          {/* <SearchInput value={search} onChange={setSearch} /> */}
          {/* 
          <Link to="/" className="listing__page__header__actions__button">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00033 13.3307C7.57954 13.3307 7.23842 12.9896 7.23842 12.5688V8.7593H3.4289C3.00811 8.7593 2.66699 8.41818 2.66699 7.9974C2.66699 7.57661 3.00811 7.23549 3.4289 7.23549H7.23842V3.42597C7.23842 3.00518 7.57954 2.66406 8.00033 2.66406C8.42111 2.66406 8.76223 3.00518 8.76223 3.42597V7.23549H12.5718C12.9925 7.23549 13.3337 7.57661 13.3337 7.9974C13.3337 8.41818 12.9925 8.7593 12.5718 8.7593H8.76223V12.5688C8.76223 12.9896 8.42111 13.3307 8.00033 13.3307Z"
                fill="currentColor"
              />
            </svg>
            Create Customer
          </Link> */}
        </div>
      </div>
      <ListingTable data={[]} headerItems={headerItems.products}>
        <div className="listing__page__table__content__row__entry">NAME</div>
      </ListingTable>
    </div>
  );
}
