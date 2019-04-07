import React from "react";

const SearchArea = props => {
    return (
        <div className="search-area">
            <form onSubmit={props.searchBook}>
                <input
                    onChange={props.handleSearch}
                    placeholder="Search books"
                    type="text"
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchArea;
