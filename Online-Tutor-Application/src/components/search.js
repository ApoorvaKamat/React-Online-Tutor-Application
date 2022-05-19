import React from 'react';
const SearchBar = (props) => {
    return(
    <div className={`input-group searchBar ${props.setClass?'searchBarOnfetch':''}`}>
        <input type="text" className="p-2 form-control" placeholder="Search..."/>
        <button className="btn btn-outline-secondary"  type="button"> <i className="bi bi-search "></i></button>
     </div>
    );
}
export default SearchBar;
