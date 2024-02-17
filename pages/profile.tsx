import { useState } from "react";
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
import { useFetchMessages } from "@hooks/useMessage/useFetchMessages";
import { useDeleteMessage } from "@hooks/useMessage/useDeleteMessage";
import { useDeleteMessages } from "@hooks/useMessage/useDeleteMessages";
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
import Pagination from "react-responsive-pagination";
import { Layout } from "../layout";
import { ConfirmModal } from "@components/modal";

const Profile: NextPage = () => {
  const { push } = useRouter();
  const [messageModal, setMessageModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteMessageId, setDeleteMessageId] = useState("");
  const [openDeleteAmessageConfirm, setDeleteAmessageConfirm] = useState(false);
  const [openDeleteAllMessagesConfirm, setDeleteAllMessagesConfirm] =
    useState(false);
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

  const {
    loading: fetchingMessages,
    success: fetchMessageSuccess,
    data,
    mutate: fetchMessageDelete,
  } = useFetchMessages({
    page: currentPage,
    limit: 2,
  });

  const { loading: deletingMessage, deleteMessage } = useDeleteMessage();
  const { loading: deleteingMessages, deleteMessages } = useDeleteMessages();

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

  const deleteMessageFunc = () => {
    void deleteMessage(deleteMessageId).then(() => {
      void fetchMessageDelete();
      setDeleteMessageId("");
      setDeleteAmessageConfirm(false);
    });
  };

  const deleteMessagesFunc = () => {
    void deleteMessages().then(() => {
      void fetchMessageDelete();
      setDeleteAllMessagesConfirm(false);
    });
  };
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
                      <div className={"flex gap-4"}>
                        <Link
                          href={"/users"}
                          className={"text-base text-slate-700 hover:underline"}
                        >
                          view all users
                        </Link>
                        <button
                          onClick={() => setMessageModal(true)}
                          className={
                            "text-sm text-slate-700 font-[500] hover:underline"
                          }
                        >
                          View Messages
                        </button>
                      </div>
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

      <Modal
        open={messageModal}
        title={"Messages"}
        onClose={() => setMessageModal(false)}
      >
        <div>
          <div className={"flex justify-end"}>
            {data?.results?.length ? (
              <button
                onClick={() => setDeleteAllMessagesConfirm(true)}
                className={
                  "bg-red-600 hover:bg-red-700 px-3 py-1 rounded-lg self-start text-white text-sm font-[600]"
                }
              >
                Delete all messages
              </button>
            ) : (
              <></>
            )}
          </div>

          {fetchingMessages && !fetchMessageSuccess ? (
            "Loading messages..."
          ) : (
            <>
              {data?.results && (
                <>
                  {data.results.map(
                    ({ _id, email, from, message, createdAt }, index) => (
                      <div key={index} className={"mt-4"}>
                        <div
                          className={
                            "flex justify-between border border-gray-400 px-3 py-3 rounded-lg text-gray-700"
                          }
                        >
                          <div className={"text-sm"}>
                            <p>
                              <b>Email:</b> {email}
                            </p>
                            <p>
                              <b>From:</b> {from}
                            </p>
                            <p>
                              <b>Timestamp:</b>{" "}
                              {new Date(createdAt).toDateString()}
                            </p>
                            <p>
                              <b>Message:</b> {message}
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              setDeleteMessageId(_id);
                              setDeleteAmessageConfirm(true);
                            }}
                            disabled={
                              deleteMessageId === _id && deletingMessage
                            }
                            className={
                              "bg-red-600 hover:bg-red-700 px-3 py-1 rounded-lg self-start text-white text-sm font-[600]"
                            }
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    )
                  )}
                </>
              )}

              <ConfirmModal
                open={openDeleteAmessageConfirm}
                text={"Do you want to delete this message?"}
                onClose={() => {
                  setDeleteAmessageConfirm(false);
                  setDeleteMessageId("");
                }}
                loading={deletingMessage}
                onProceed={deleteMessageFunc}
              />

              <ConfirmModal
                open={openDeleteAllMessagesConfirm}
                text={"Are you sure you want to delete all messages?"}
                onClose={() => setDeleteAllMessagesConfirm(false)}
                loading={deleteingMessages}
                onProceed={deleteMessagesFunc}
              />

              <div className={"flex justify-center"}>
                <Pagination
                  current={currentPage}
                  total={data?.pages ?? 0}
                  onPageChange={(value) => setCurrentPage(value)}
                />
              </div>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default Profile;
