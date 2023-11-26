import { IconProps } from "@utils/common";
import { FC } from "react";

export const OrganiserLogo:FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="44"
      height="37"
      viewBox="0 0 55 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.625 20.5417L20.5 26.4167L43.4167 6.83337"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37 21.5V32C37 32.7956 36.6722 33.5587 36.0888 34.1213C35.5053 34.6839 34.714 35 33.8889 35H12.1111C11.286 35 10.4947 34.6839 9.91122 34.1213C9.32778 33.5587 9 32.7956 9 32V11C9 10.2044 9.32778 9.44129 9.91122 8.87868C10.4947 8.31607 11.286 8 12.1111 8H29.2222"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
