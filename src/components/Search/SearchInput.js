import React, { useState } from "react";
import Data from "./data.json";
import { Link } from "react-router-dom";

const SearchInput = () => {
  const [visible, setVisible] = useState(3);
  //const slice = Data.slice(0, visible);
  const [searchBar, setSearchBar] = useState("");
  return (
    <div>
      <input
        className="search-input"
        type="text"
        onChange={(event) => {
          setSearchBar(event.target.value);
        }}
        value={searchBar}
      ></input>
      <form className="form-list">
        <ul>
          {Data.filter((item) => {
            return Object.keys(item).some((key) =>
              item[key]
                .toString()
                .toLowerCase()
                .includes(searchBar.toString().toLowerCase())
            );
          })
            .slice(0, visible)
            .map((item) => {
              return (
                <div>
                  <li className="list-start">{item.country}</li>
                  <li className="list-end">Email: {item.email}</li>
                  <li className="list-down">
                    {item.name_surname} - {item.date}
                  </li>
                  <hr className="form-hr"></hr>
                </div>
              );
            })}
        </ul>
        <Link style={{ textDecoration: "none" }} to="/result-page">
          <button className="form-btn ">Show More</button>
        </Link>
      </form>
    </div>
  );
};

export default SearchInput;
