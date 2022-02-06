import React from "react";
import SearchButton from "../../components/Search/SearchButton";
import SearchInput from "../../components/Search/SearchInput";
import Header from "../../components/Header/Header";
import "../../App.css";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <SearchInput />
      <SearchButton />
    </div>
  );
};

export default LandingPage;
