import React, { useState, useCallback, Fragment } from "react";
import Data from "./data.json";
import Pagination from "../Pagination/Paginations";

const ResultSearchInput = () => {
  const [searchBar, setSearchBar] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  //const [ascdesc, setAscdesc] = useState("asc");

  let NUM_OF_RECORDS = Data.length;
  let pageSliced = 6;

  const onPageChanged = useCallback(
    (event, page) => {
      setCurrentPage(page);
      event.preventDefault();
    },
    [setCurrentPage]
  );
  const currentData = Data.slice(
    (currentPage - 1) * pageSliced,
    (currentPage - 1) * pageSliced + pageSliced
  );

  /* const sortedasc = Data.sort((a, b) => {
    const isReversed = ascdesc === "asc" ? 1 : -1;
    return isReversed * a.name_surname.localeCompare(b.name_surname);
  }); */

  return (
    <div>
      <input
        className="result-search-input"
        type="text"
        id="search"
        placeholder="Search"
        onChange={(event) => {
          setSearchBar(event.target.value);
        }}
        value={searchBar}
      ></input>
      <form className="result-form-list">
        <ul>
          {currentData
            .filter((item) => {
              return Object.keys(item).some((key) =>
                item[key]
                  .toString()
                  .toLowerCase()
                  .includes(searchBar.toString().toLowerCase())
              );
            })
            .map((item) => {
              return (
                <Fragment key={item.id}>
                  <li key={item.id} className="result-list-start">
                    {item.country}
                  </li>
                  <li className="result-list-end">Email: {item.email}</li>
                  <li className="result-list-down">
                    {item.name_surname} - {item.date}
                  </li>
                  <hr className="result-form-hr"></hr>
                </Fragment>
              );
            })}
        </ul>

        <div></div>

        <Pagination
          totalRecords={NUM_OF_RECORDS}
          pagepageSliced={pageSliced}
          onPageChanged={onPageChanged}
          currentPage={currentPage}
        ></Pagination>
      </form>
    </div>
  );
};

export default ResultSearchInput;
