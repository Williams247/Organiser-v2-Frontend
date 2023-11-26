import { FC, useState } from "react";
import { FormSelectInput } from "./FormSelect";
import { Search } from "@icons/Search";
import { Reload } from "@icons/Reload";

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
              "lex w-full sm:w-full md:w-full lg:w-[30%] mt-3 sm:mt-3 md:mt-3 lg:mt-0"
            }
            items={searchParams}
            placeholder={"Select search method"}
          />

          <button
            className={
              "flex sm:flex md:flex lg:inline mt-5 sm:mt-5 md:mt-5 lg:mt-0 gap-3 sm:gap-3 md:gap-3 lg:gap-0 justify-end sm:justify-end md:justify-end lg:justify-start"
            }
            onClick={sendSearchRequest}
          >
            <p className={"inline sm:inline md:inline lg:hidden"}>Search</p>
            <Search />
          </button>

          <button
            className={
              "flex sm:flex md:flex lg:inline mt-3 sm:mt-3 md:mt-3 lg:mt-0 gap-3 sm:gap-3 md:gap-3 lg:gap-0 justify-end sm:justify-end md:justify-end lg:justify-start"
            }
            onClick={onReload}
          >
            <p className={"inline sm:inline md:inline lg:hidden"}>Reload</p>
            <Reload />
          </button>
        </div>
      </div>
    </>
  );
};
