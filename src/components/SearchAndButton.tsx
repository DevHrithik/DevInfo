import React from "react";
import { IoSearch } from "react-icons/io5";
type Props = {
  value: string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

function SearchAndButton(props: Props) {
  return (
    <form
      onSubmit={props.onSubmit}
      className="flex items-center gap-2 w-full shadow-md focus-within:ring-2 dark:focus-within:ring-gray-200 focus-within:ring-slate-800 p-2 rounded-lg dark:bg-slate-800 bg-white"
    >
      <div className="flex items-center w-full h-full gap-2">
        <IoSearch className="text-2xl text-blue-500" />
        <input
          value={props.value}
          onChange={props.onChange}
          type="text"
          className="w-full h-[40px] rounded-lg bg-inherit outline-none px-1 text-sm"
          placeholder="Search GitHub username...."
        />
      </div>
      <button className="rounded-lg bg-blue-500 hover:opacity-80 px-5 py-2">
        Search
      </button>
    </form>
  );
}

export default SearchAndButton;
