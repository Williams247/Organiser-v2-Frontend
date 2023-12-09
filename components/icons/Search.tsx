import { FC } from "react";

export const Search: FC<{ className?: string }> = ({ className }) => {
  return (
    <>
      <div className={"hidden sm:hidden md:hidden lg:block"} title={"Initiate Search"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#CC68EF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className ?? ""}
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
      <div className={"block sm:block md:block lg:hidden"} title={"Initiate Search"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className ?? ""}
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
    </>
  );
};
