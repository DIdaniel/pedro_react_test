import React, { useState } from "react";

const Input = ({ showDiv }) => {
  const [searchWord, setSearchWord] = useState("");

  return (
    <div>
      <input
        type="text"
        data-testid="search_bar"
        placeholder="Search..."
        onChange={() => setSearchWord((e) => e.target.value)}
      />
      <h1 data-testid="displaySearch">{searchWord}</h1>
      {/* <h1 data-testid="displaySearch">Patrick</h1> */}
      {showDiv && (
        <div data-testid="divWeWantToShow">
          Hey My Name is Daniel, Plz subscribe I would be very happy pls
        </div>
      )}
    </div>
  );
};

export default Input;
