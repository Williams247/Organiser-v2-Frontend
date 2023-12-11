import {
  CircleCheck,
  CircleUncheck,
  Delete,
  Edit,
  Maximize,
} from "@components/icons";
import { useDeleteActivity, useUpdateActivity } from "@hooks/useActivities";
import { ActivitiesResponse } from "@hooks/utils/types";
import { FC, useEffect,useState } from "react";
import { SpinnerCircular } from "spinners-react";

import { ConfirmModal, EditActivity,FullView } from "../../modal";

interface Props {
  data: ActivitiesResponse;
  mutate: () => void;
  percentageMutate: () => void;
}

interface FUllActivityStateProps {
  todo: string;
  note: string;
  open: boolean;
  type: string;
  activityId: string;
  isChecked: boolean | undefined;
  createdAt: string;
  updatedAt: string;
}

export const List: FC<Props> = ({ data, mutate, percentageMutate }) => {
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [updateId, setUpdateId] = useState("");

  const [fullViewActivity, setFullViewActivity] =
    useState<FUllActivityStateProps>({
      todo: "",
      note: "",
      open: false,
      type: "",
      activityId: "",
      isChecked: undefined,
      createdAt: "",
      updatedAt: "",
    });

  const { deleteActivity, loading, success } = useDeleteActivity();

  const {
    loading: updating,
    success: updateSuccess,
    updateActivties,
  } = useUpdateActivity();

  const handleSetDelete = (deleteId: string, open: boolean) => {
    setDeleteId(deleteId);
    setOpen(open);
  };

  useEffect(() => {
    if (!loading && success) {
      setOpen(!open);
      mutate();
      percentageMutate();
      setDeleteId("");
    }
  }, [loading, success]);

  useEffect(() => {
    if (!updating && updateSuccess) {
      mutate();
      percentageMutate();
    }
  }, [updating, updateSuccess]);

  return (
    <>
      <section>
        <div>
          {data.map(
            ({ _id, isChecked, todo, note, createdAt, updatedAt }, index) => (
              <div
                className={
                  "flex justify-between mt-3 bg-white px-4 py-3 rounded-lg"
                }
                key={index}
              >
                <div className={"flex gap-3"}>
                  <button
                    disabled={updating}
                    onClick={() => {
                      void updateActivties({
                        isChecked: !isChecked,
                        id: _id,
                        todo,
                        note,
                      });
                      setUpdateId(_id ?? '');
                    }}
                  >
                    {updating && updateId === _id ? (
                      <SpinnerCircular
                        thickness={300}
                        size={18}
                        color={"#CC68EF"}
                        secondaryColor={"white"}
                      />
                    ) : (
                      <>{isChecked ? <CircleCheck /> : <CircleUncheck />}</>
                    )}
                  </button>
                  <p className={"text-[14px]"}>{todo}</p>
                </div>
                <div className={"flex gap-1"}>
                  <button
                    onClick={() =>
                      setFullViewActivity({
                        todo: todo ?? "",
                        note: note ?? "",
                        open: true,
                        type: "maximize",
                        activityId: _id ?? "",
                        isChecked: isChecked,
                        createdAt: createdAt ?? "",
                        updatedAt: updatedAt ?? "",
                      })
                    }
                  >
                    <Maximize />
                  </button>
                  <button
                    onClick={() =>
                      setFullViewActivity({
                        todo: todo ?? "",
                        note: note ?? "",
                        open: true,
                        type: "edit",
                        activityId: _id ?? "",
                        isChecked: isChecked ,
                        createdAt: createdAt ?? "",
                        updatedAt: updatedAt ?? "",
                      })
                    }
                  >
                    <Edit />
                  </button>
                  <button onClick={() => handleSetDelete(_id ?? "", true)}>
                    <Delete />
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </section>
      <ConfirmModal
        open={open}
        onClose={() => setOpen(!open)}
        onProceed={() => void deleteActivity(deleteId)}
        text={"Taking this action will delete this list"}
        loading={loading}
      />
      <FullView
        todo={fullViewActivity.todo}
        note={fullViewActivity.note}
        createdAt={fullViewActivity.createdAt}
        updatedAt={fullViewActivity.updatedAt}
        onClose={() =>
          setFullViewActivity({
            todo: "",
            note: "",
            open: false,
            type: "",
            activityId: "",
            isChecked: undefined,
            createdAt: "",
            updatedAt: "",
          })
        }
        open={fullViewActivity.open && fullViewActivity.type === "maximize"}
      />
      <EditActivity
        todo={fullViewActivity.todo}
        note={fullViewActivity.note}
        id={fullViewActivity.activityId}
        open={fullViewActivity.open && fullViewActivity.type === "edit"}
        isChecked={fullViewActivity.isChecked!}
        loading={updating}
        updateActivties={({ isChecked, todo, note, id }) =>
          void updateActivties({ isChecked, todo, note, id })
        }
        onClose={() => {
          setFullViewActivity({
            todo: "",
            note: "",
            open: false,
            type: "",
            activityId: "",
            isChecked: undefined,
            createdAt: "",
            updatedAt: "",
          });
        }}
      />
    </>
  );
};
