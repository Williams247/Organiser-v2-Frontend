import { Reload } from "@icons/Reload";
import { Search } from "@icons/Search";
import { FC, useState } from "react";

import { FormSelectInput } from "./FormSelect";

interface Props {
  className?: string;
  onSearch: (value: string, type: string) => void;
  onReload: () => void;
}

const searchParams = [
  {
    key: "todos",
    text: "Todos",
  },
  {
    key: "notes",
    text: "Notes",
  },
];

export const FormSearhFilter: FC<Props> = ({
  className,
  onSearch,
  onReload,
}) => {
  const [searchType, setSearchType] = useState<string>("todos");
  const [todoSearchKeyWord, setTodoSearchKeyWord] = useState("");
  const [noteSearchKeyWord, setNoteSearchKeyWord] = useState("");

  const sendSearchRequest = () => {
    onSearch(
      `${
        searchType === "todos"
          ? todoSearchKeyWord
          : searchType === "notes"
          ? noteSearchKeyWord
          : ""
      }`,
      searchType
    );
  };

  return (
    <>
      <div className={className ?? ""}>
        <div
          className={
            "flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between"
          }
        >
          <div className={"flex w-full sm:w-full md:w-full lg:w-[60%]"}>
            {searchType === "todos" && (
              <input
                type={"text"}
                placeholder={"Search by todo..."}
                onChange={(e) => setTodoSearchKeyWord(e.target.value)}
                className={
                  "outline-none px-3 text-[13px] py-2 w-full bg-transparent border border-[#cac5c5] rounded-lg"
                }
              />
            )}

            {searchType === "notes" && (
              <input
                type={"text"}
                placeholder={"Search by note..."}
                onChange={(e) => setNoteSearchKeyWord(e.target.value)}
                className={
                  "outline-none px-3 text-[13px] py-2 w-full bg-transparent border border-[#cac5c5] rounded-lg"
                }
              />
            )}
          </div>

          <FormSelectInput
            onChange={(key) => {
              setSearchType(key as string);
            }}
            className={
              "w-full sm:w-full md:w-full lg:w-[30%] mt-3 sm:mt-3 md:mt-3 lg:mt-0"
            }
            items={searchParams}
            placeholder={"Select search method"}
          />

          <div className={"flex justify-end"}>
            <div
              className={
                "flex flex-row-reverse sm:flex-row-reverse md:flex-row-reverse lg:flex-row gap-3 sm:gap-3 md:gap-3 lg:gap-2 flex-wrap"
              }
            >
              <button
                className={
                  "flex sm:flex md:flex lg:inline mt-5 sm:mt-5 md:mt-5 lg:mt-0 gap-3 sm:gap-3 md:gap-3 lg:gap-0 justify-end sm:justify-end md:justify-end lg:justify-start bg-[#CC68EF] sm:bg-[#CC68EF] md:bg-[#CC68EF] lg:bg-transparent px-3 sm:px-3 md:px-3 lg:px-0 py-1 sm:py-1 md:py-1 lg:py-0 rounded-xl"
                }
                onClick={sendSearchRequest}
              >
                <p
                  className={
                    "inline sm:inline md:inline lg:hidden text-sm mt-[2px] ml-3 text-white font-bold"
                  }
                >
                  Search
                </p>
                <Search className={"mt-[2px]"} />
              </button>

              <button
                className={
                  "flex sm:flex md:flex lg:inline mt-5 sm:mt-3 md:mt-3 lg:mt-0 gap-3 sm:gap-3 md:gap-3 lg:gap-0 justify-end sm:justify-end md:justify-end lg:justify-start border sm:border md:border lg:border-0 border-[#CC68EF] sm:border-[#CC68EF] md:border-[#CC68EF] lg:border-transparent px-3 sm:px-3 md:px-3 lg:px-0 py-1 sm:py-1 md:py-1 lg:py-0 rounded-xl text-[#CC68EF] font-bold"
                }
                onClick={onReload}
              >
                <p
                  className={
                    "inline sm:inline md:inline lg:hidden text-sm mt-[2px] ml-2"
                  }
                >
                  Reload
                </p>
                <Reload className={"mt-[3px]"} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
