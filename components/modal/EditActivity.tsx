import { FormButton, FormInput,FormWiziwig } from "@components/widgets";
import { joiResolver } from "@hookform/resolvers/joi";
import { ActivitesForm } from "@hooks/utils/form";
import { ActivitesSchema } from "@hooks/utils/validation";
import { ActivitiesPayload } from "@utils/default";
import { Modal } from "@widgets/Modal";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";

import { EditModalProps } from "./type";

export const EditActivity: FC<EditModalProps> = ({
  open,
  todo,
  note,
  id,
  loading,
  onClose,
  isChecked,
  updateActivties,
}) => {
  const formHook = useForm<ActivitiesPayload>({
    mode: "onChange",
    resolver: joiResolver(ActivitesSchema),
  });

  useEffect(() => {
    formHook.setValue(ActivitesForm.TODO, todo);
    formHook.setValue(ActivitesForm.NOTE, note);
  }, [todo, note, formHook]);

  return (
    <Modal open={open} onClose={onClose}>
      <div>
        <form
          onSubmit={(...args) =>
            void formHook.handleSubmit((payload) =>
              updateActivties({
                isChecked: isChecked,
                todo: payload.todo ?? "",
                note: payload.note ?? "",
                id,
              })
            )(...args)
          }
        >
          <FormInput
            title={ActivitesForm.TODO}
            placeholder={"Enter your todo"}
            handler={formHook}
            label={"Todo"}
          />

          <FormWiziwig
            title={ActivitesForm.NOTE}
            handler={formHook}
            onChange={(event) => formHook.setValue(ActivitesForm.NOTE, event)}
            placeholder={"Enter your todo"}
            className={"mt-3"}
          />

          <FormButton className={"mt-5"} loading={loading}>
            Update
          </FormButton>
        </form>
      </div>
    </Modal>
  );
};
