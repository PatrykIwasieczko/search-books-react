import React from "react";

const SearchArea = ({ onSearchSubmit, onSearchFieldChange }) => {
    return (
        <div className="search-area">
            <form onSubmit={onSearchSubmit}>
                <input
                    onChange={onSearchFieldChange}
                    placeholder="Search books"
                    type="text"
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchArea;
