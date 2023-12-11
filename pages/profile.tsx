import { Loader } from "@components/loader";
import {
  FormButton,
  FormInput,
  FormPasswordInput,
  FormWiziwig,
  Modal,
} from "@components/widgets";
import { joiResolver } from "@hookform/resolvers/joi";
import {
  useCreateActivities,
  useFetchActivities,
  useFetchActivityPercentage,
} from "@hooks/useActivities";
import { useFetchProfile, useUpdateProfile } from "@hooks/useProfile";
import { ProfileForm, UpdateProfileSchema } from "@hooks/useProfile/utils";
import { ActivitesForm } from "@hooks/utils/form/activities";
import { ActivitesSchema } from "@hooks/utils/validation";
import { UseGeneralStateContext } from "@state/general";
import { Role } from "@utils/common";
import { UserPayload } from "@utils/default";
import { ActivitiesPayload } from "@utils/default";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { Layout } from "../layout";

const Profile: NextPage = () => {
  const { push } = useRouter();
  const { profile, loading, success, mutate } = useFetchProfile();
  const {
    loading: fetching,
    createActivties,
    success: activitySuccess,
  } = useCreateActivities();

  const { handleOpenCloseMenu, openCreateActivity } = UseGeneralStateContext();
  const { mutate: percentageMutate } = useFetchActivityPercentage();
  const { mutate: activityMutate } = useFetchActivities({
    page: 1,
    limit: 10,
    todo: "",
    note: "",
  });

  const {
    loading: updatingProfile,
    updateProfile,
    success: updateProfileSuccess,
  } = useUpdateProfile();

  const formHook = useForm<UserPayload>({
    mode: "onChange",
    resolver: joiResolver(UpdateProfileSchema),
  });

  const activityFormHook = useForm<ActivitiesPayload>({
    mode: "onChange",
    resolver: joiResolver(ActivitesSchema),
  });

  useEffect(() => {
    if (profile) {
      formHook.setValue("firstName", profile.firstName);
      formHook.setValue("lastName", profile.lastName);
    }
  }, [formHook, profile]);

  useEffect(() => {
    if (!updatingProfile && updateProfileSuccess) {
      void mutate();
      formHook.setValue("password", "");
      formHook.setValue("confirmPassword", "");
    }
  }, [formHook, mutate, updateProfileSuccess, updatingProfile]);

  useEffect(() => {
    if (!fetching && activitySuccess) {
      handleOpenCloseMenu(false);
      if (percentageMutate) void percentageMutate();
      if (activityMutate) activityMutate();
      void push("/activities");
    }
  }, [fetching, activitySuccess]);
  return (
    <>
      {!loading && success ? (
        <Layout>
          <div className={"pt-36"}>
            <section className={"mt-5"}>
              <div className={"flex justify-center"}>
                <div className={"w-[90%] sm:w-[90%] md:w-[70%] rounded-sm"}>
                  <form
                    onSubmit={(...args) =>
                      void formHook.handleSubmit(updateProfile)(...args)
                    }
                  >
                    <div
                      className={
                        "flex justify-between flex-col sm:flex-col md:flex-row"
                      }
                    >
                      <div className={"w-full sm:w-full md:w-[49%]"}>
                        <FormInput
                          handler={formHook}
                          title={ProfileForm.FIRSTNAME}
                          className={"w-full"}
                          placeholder={"Enter your first name...."}
                        />
                        <FormInput
                          handler={formHook}
                          title={ProfileForm.LASTNAME}
                          className={"w-full mt-[25px]"}
                          placeholder={"Enter your last name...."}
                        />
                      </div>
                      <div
                        className={
                          "w-full sm:w-full md:w-[49%] mt-5 sm:mt-5 md:mt-0"
                        }
                      >
                        <FormPasswordInput
                          handler={formHook}
                          title={ProfileForm.PASSWORD}
                          className={"w-full"}
                          placeholder={"Password"}
                        />
                        <FormPasswordInput
                          handler={formHook}
                          title={ProfileForm.PASSWORD}
                          className={"w-full mt-5"}
                          placeholder={"Confirm Password"}
                        />
                      </div>
                    </div>
                    <FormButton loading={updatingProfile} className={"mt-4"}>
                      Submit
                    </FormButton>
                  </form>
                  <div className={"mt-3"}>
                    {profile?.role === Role.ADMIN && (
                      <Link
                        href={"/users"}
                        className={"text-sm text-slate-700 hover:underline"}
                      >
                        view all users
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Layout>
      ) : (
        <Loader />
      )}
      <Modal
        open={openCreateActivity}
        title={"Create an activity"}
        onClose={() => handleOpenCloseMenu(false)}
      >
        <form
          onSubmit={(...args) =>
            void activityFormHook.handleSubmit(createActivties)(...args)
          }
        >
          <FormInput
            handler={activityFormHook}
            title={ActivitesForm.TODO}
            label={"Todo"}
            placeholder={"Enter your todo..."}
          />
          <FormWiziwig
            handler={activityFormHook}
            title={ActivitesForm.NOTE}
            placeholder={"Enter your note..."}
            onChange={(event) => {
              activityFormHook.setValue(ActivitesForm.NOTE, event);
            }}
            className={"mt-3"}
          />
          <FormButton loading={fetching} className={"mt-6"}>
            Create Activty
          </FormButton>
        </form>
      </Modal>
    </>
  );
};

export default Profile;
