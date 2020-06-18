import React, { Component } from 'react';
import SearchResults from './SearchResults';
import { Link } from 'react-router-dom';
import BooksInput from './BooksInput';

class BooksSearch extends Component {
  render() {
    const {
      searchBooks,
      myBooks,
      onSearch,
      onResetSearch,
      onMove
    } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={onResetSearch}>
              Close
            </button>
          </Link>
          <BooksInput onSearch={onSearch} />
        </div>
        <SearchResults
          searchBooks={searchBooks}
          myBooks={myBooks}
          onMove={onMove}
        />
      </div>
    );
  }
}

export default BooksSearch;
