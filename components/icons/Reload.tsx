import { FC } from "react";

export const Reload: FC<{ className?: string }> = ({ className }) => {
  return (
    <div title={"Reload list"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#CC68EF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className ?? ""}
      >
        <polyline points="1 4 1 10 7 10"></polyline>
        <polyline points="23 20 23 14 17 14"></polyline>
        <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
      </svg>
    </div>
  );
};
