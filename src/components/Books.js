import React, { Component } from "react";
import SearchArea from "./SearchArea";
import BookList from "./BookList";
import request from "superagent";

class Books extends Component {
    state = {
        books: [],
        searchField: ""
    };

    onSearchSubmit = e => {
        e.preventDefault();
        try {
            request
                .get("https://www.googleapis.com/books/v1/volumes")
                .query({ q: this.state.searchField })
                .then(data => {
                    this.setState({ books: [...data.body.items] });
                });
        } catch (error) {
            alert("An error occurred. Check your internet connection");
        }
    };

    onSearchFieldChange = e => {
        this.setState({ searchField: e.target.value });
    };

    render() {
        return (
            <div>
                <SearchArea
                    onSearchSubmit={this.onSearchSubmit}
                    onSearchFieldChange={this.onSearchFieldChange}
                />
                <BookList books={this.state.books} />
            </div>
        );
    }
}

export default Books;
