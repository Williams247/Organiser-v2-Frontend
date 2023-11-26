import { IconProps } from "@utils/common";
import { FC } from "react";

export const ThreeDots:FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11 10.2916C11.5063 10.2916 11.9167 9.93721 11.9167 9.49998C11.9167 9.06275 11.5063 8.70831 11 8.70831C10.4937 8.70831 10.0833 9.06275 10.0833 9.49998C10.0833 9.93721 10.4937 10.2916 11 10.2916Z"
        stroke="#8C8A89"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 4.75002C11.5063 4.75002 11.9167 4.39558 11.9167 3.95835C11.9167 3.52113 11.5063 3.16669 11 3.16669C10.4937 3.16669 10.0833 3.52113 10.0833 3.95835C10.0833 4.39558 10.4937 4.75002 11 4.75002Z"
        stroke="#8C8A89"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 15.8333C11.5063 15.8333 11.9167 15.4789 11.9167 15.0417C11.9167 14.6044 11.5063 14.25 11 14.25C10.4937 14.25 10.0833 14.6044 10.0833 15.0417C10.0833 15.4789 10.4937 15.8333 11 15.8333Z"
        stroke="#8C8A89"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
