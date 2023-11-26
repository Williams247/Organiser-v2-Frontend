import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Pagination from "react-responsive-pagination";
import { ActivitiesPayload } from "@utils/default";
import { UseGeneralStateContext } from "@state/general";
import { Layout } from "../layout";
import { ProgressBar, List } from "@components/pageComponents/activities";
import { Modal, FormInput, FormButton, FormWiziwig } from "@components/widgets";
import { Loader } from "@components/loader";
import {
  useCreateActivities,
  useFetchActivities,
  useFetchActivityPercentage,
} from "@hooks/useActivities";
import { ActivitesForm } from "@hooks/utils/form/activities";
import { ActivitesSchema } from "@hooks/utils/validation";
import { FormSearhFilter } from "@components/widgets";

const Activities: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { handleOpenCloseMenu, openCreateActivity } = UseGeneralStateContext();
  const { loading, createActivties, success } = useCreateActivities();
  const [searchValue, setSearchValue] = useState("");
  const [searchType, setSearchType] = useState("");

  const {
    loading: percentageLoading,
    success: percentageSuccess,
    data: percentage,
    mutate: percentageMutate,
  } = useFetchActivityPercentage();

  const {
    loading: fetchingActivities,
    success: successActivities,
    data,
    mutate,
  } = useFetchActivities({
    page: currentPage,
    limit: 10,
    todo: `${searchType === "todos" ? searchValue : ""}`,
    note: `${searchType === "notes" ? searchValue : ""}`,
  });

  const formHook = useForm<ActivitiesPayload>({
    mode: "onChange",
    resolver: joiResolver(ActivitesSchema),
  });

  const reloadLists = () => {
    if (mutate) mutate();
    setSearchValue("");
  };

  useEffect(() => {
    if (!loading && success) {
      handleOpenCloseMenu(false);
      formHook.reset();
      if (mutate) {
        mutate();
        percentageMutate();
      }
    }
  }, [loading, success, currentPage]);

  return (
    <>
      {fetchingActivities || percentageLoading ? (
        <Loader />
      ) : (
        <>
          {successActivities || percentageSuccess ? (
            <Layout>
              <div className={"pt-28"}>
                <div className={"flex justify-center"}>
                  <div className={"w-[85%] sm:w-[85%] md:w-[60%] mb-16"}>
                    <FormSearhFilter
                      onReload={reloadLists}
                      onSearch={(value, type) => {
                        setSearchValue(value);
                        setSearchType(type);
                      }}
                      className={"mb-4"}
                    />

                    <ProgressBar className={"mb-8"} percentage={percentage} />

                    <List
                      data={data?.results ?? []}
                      mutate={mutate as () => void}
                      percentageMutate={percentageMutate as () => void}
                    />

                    <div className={"flex justify-center mt-10"}>
                      <Pagination
                        current={currentPage}
                        total={data?.pages ?? 0}
                        onPageChange={(value) => setCurrentPage(value)}
                      />
                    </div>

                    <Modal
                      open={openCreateActivity}
                      title={"Create an activity"}
                      onClose={() => handleOpenCloseMenu(false)}
                    >
                      <form
                        onSubmit={(...args) =>
                          void formHook.handleSubmit(createActivties)(...args)
                        }
                      >
                        <FormInput
                          handler={formHook}
                          title={ActivitesForm.TODO}
                          label={"Todo"}
                          placeholder={"Enter your todo..."}
                        />
                        <FormWiziwig
                          handler={formHook}
                          title={ActivitesForm.NOTE}
                          placeholder={"Enter your note..."}
                          onChange={(event) => {
                            formHook.setValue(ActivitesForm.NOTE, event);
                          }}
                          className={"mt-3"}
                        />
                        <FormButton loading={loading} className={"mt-6"}>
                          Create Activty
                        </FormButton>
                      </form>
                    </Modal>
                  </div>
                </div>
              </div>
            </Layout>
          ) : (
            <p>An Error occured</p>
          )}
        </>
      )}
    </>
  );
};

export default Activities;
