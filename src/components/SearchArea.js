import React from "react";

const SearchArea = props => {
    return (
        <div className="search-area">
            <form onSubmit={props.onSearchSubmit}>
                <input
                    onChange={props.onSearchFieldChange}
                    placeholder="Search books"
                    type="text"
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchArea;
