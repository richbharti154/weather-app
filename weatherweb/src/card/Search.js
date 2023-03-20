    import React, {  useState } from "react";
    import "./Search.css";
    import SearchIcon from "@mui/icons-material/Search";
//  import { useRecoilState } from "recoil";


    function Search(props) {
 
    return (
        <div className="searchContainer">
        <div className="searchIconContainer">
            <SearchIcon className="searchIcon" />
        </div>
        <input
            className="searchInput"
            onChange={props.onChange}
            value={props.value}
            placeholder="Search"
        />
        </div>
    );
    }

    export default Search;
