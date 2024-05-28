import { Search } from "lucide-react";
import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTimeout(()=>{
      onSearch(value);
    },500)
    setInputValue(value);
  };

  return (
    <div className=" bg-gray-200 flex px-6 py-1 rounded-full w-[60%] mx-auto shadow-slate-400 drop-shadow-lg mt-12">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search for a Pokémon"
        className="w-full bg-gray-200 p-2 focus:outline-none text-black"
      />
      <div className="text-black m-auto">
        <Search />
      </div>
    </div>
  );
};

export default SearchBar;
