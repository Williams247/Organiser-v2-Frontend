import { Loader } from "@components/loader";
import { FormButton } from "@components/widgets";
import { useEnableDisableUser,useFetchUsers } from "@hooks/useUsers";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Pagination from "react-responsive-pagination";

import { Layout } from "../layout";

const Users: NextPage = () => {
  const [idLoading, setIdLoading] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { loading, data, mutate } = useFetchUsers({
    page: currentPage,
    limit: 10,
  });

  const {
    loading: enableDisableLoading,
    enableDisable,
    success,
  } = useEnableDisableUser();

  useEffect(() => {
    if (!enableDisableLoading && success) {
      setIdLoading("");
      mutate();
    }
  }, [enableDisableLoading, success]);

  useEffect(() => {
    mutate();
  }, [currentPage]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {data && data.results && (
            <Layout>
              <div className={"h-screen flex justify-center container"}>
                <div className={"w-[90%] sm:w-[90%] md:w-[70%]"}>
                  <div className={"pb-16 pt-28"}>
                    {data.results.map(
                      (
                        { _id, firstName, lastName, email, role, disabled },
                        index
                      ) => {
                        return (
                          <div
                            key={`users-${index}`}
                            className={
                              "flex justify-between mt-3 bg-white px-4 py-3 rounded-lg flex-col sm:flex-col md:flex-row"
                            }
                          >
                            <p className={"mt-2 text-sm"}>
                              {firstName} {lastName}
                            </p>
                            <p className={"mt-2 text-sm"}>{email}</p>
                            <p
                              className={`mt-2 text-sm  ${
                                disabled ? "text-[red]" : "text-[green]"
                              }`}
                            >
                              {disabled ? "inactive" : "active"}
                            </p>
                            <p className={"mt-2 text-sm"}>{role}</p>
                            <FormButton
                              onClick={() => {
                                void enableDisable(_id ?? "");
                                setIdLoading(_id ?? "");
                              }}
                              className={"text-sm mt-3 sm:mt-3 md:mt-0"}
                              loading={
                                enableDisableLoading && idLoading === _id
                              }
                              disabled={
                                enableDisableLoading && idLoading === _id
                              }
                            >
                              {disabled ? "Enable" : "Disable"}
                            </FormButton>
                          </div>
                        );
                      }
                    )}
                  </div>
                  <div className={"flex justify-center"}>
                    <Pagination
                      current={currentPage}
                      total={data.pages ?? 0}
                      onPageChange={(value) => setCurrentPage(value)}
                    />
                  </div>
                </div>
              </div>
            </Layout>
          )}
        </div>
      )}
    </>
  );
};

export default Users;
