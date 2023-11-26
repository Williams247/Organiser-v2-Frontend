import { useState, useEffect } from "react";
import Link from "next/link";
import { UseGeneralStateContext } from "@state/general";
import { ThreeDots, PlusIcon } from "@components/icons";

import {
  useDeleteAllActivities,
  useFetchActivities,
  useFetchActivityPercentage,
} from "@hooks/useActivities";

import { ConfirmModal } from "../modal/ConfirmModal";

export const Navigation = () => {
  const { success, loading, deleteAllActivity } = useDeleteAllActivities();
  const { mutate: percentageMutate } = useFetchActivityPercentage();
  const { mutate } = useFetchActivities({ page: 1, limit: 10 });

  const { handleOpenCloseMenu } = UseGeneralStateContext();
  const [open, setOpen] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleLogout = () => {
    window.location.href = "/";
    localStorage.clear();
  };

  useEffect(() => {
    if (!loading && success) {
      setOpenConfirm(false);
      if (mutate) mutate();
      if (percentageMutate) percentageMutate();
    }
  }, [success, loading]);

  return (
    <>
      <section>
        <div
          className={
            "bg-[#cac5c5] w-full fixed pt-3 pb-5 px-7 sm:px-7 md:px-0 z-40"
          }
        >
          <div className={"container flex justify-between"}>
            <div className={"flex"}>
              <Link href={"/activities"}>
                <p className={"mt-1.5 text-black font-bold cursor-pointer"}>
                  Organiser
                </p>
              </Link>
            </div>
            <div className={"flex gap-2 pt-2"}>
              <button
                className={
                  "bg-[#F4F4F4] rounded-full h-[25px] w-[25px] flex justify-center items-center cursor-pointer"
                }
                onClick={() => handleOpenCloseMenu(true)}
              >
                <PlusIcon />
              </button>
              <button
                onClick={() => setOpen(!open)}
                className={
                  "bg-[#F4F4F4] rounded-full h-[25px] w-[25px] flex justify-center items-center cursor-pointer"
                }
              >
                <ThreeDots />
              </button>
              {open && (
                <div
                  className={
                    "absolute bg-white rounded-lg w-[180px] h-[80px] -ml-[120px] mt-10 px-4 py-3"
                  }
                >
                  <ul>
                    <li
                      className={"text-[13px] hover:underline cursor-pointer"}
                    >
                      <Link href={"/profile"}>View Profile</Link>
                    </li>
                    <li
                      className={"text-[13px] hover:underline cursor-pointer"}
                      onClick={() => setOpenConfirm(!openConfirm)}
                    >
                      Delete All Activities
                    </li>
                    <li
                      className={"text-[13px] hover:underline cursor-pointer"}
                      onClick={handleLogout}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <ConfirmModal
        open={openConfirm}
        onClose={() => setOpenConfirm(!openConfirm)}
        onProceed={() => void deleteAllActivity()}
        loading={loading}
        text={
          "Taking this action will delete all the activities you have created on this account"
        }
      />
    </>
  );
};
