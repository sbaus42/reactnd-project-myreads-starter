import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

class SearchBook extends Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired
  }

  state = {
    foundBooks: [],
    error: false
  }

  searchStuff = (query) => {
    query = query.trim() || "_"

    BooksAPI.search(query).then(response => {
      if(response.hasOwnProperty('error') || Object.keys(response).length === 0) {
        this.setState({ foundBooks: [], error: true })
      } else {
        this.setState({ foundBooks: response, error: false })
      }
    })
  }

  render() {
    const { handleChange, getShelf } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => {this.searchStuff(event.target.value)}}
            />
          </div>
        </div>
        <div className="search-books-results">
          {this.state.error ? (
            <p>No results found</p>
            ) : (
            <ol className="books-grid">
              {this.state.foundBooks.map(book => (
                <li key={book.id}>
                  <Book bookInfo={book}
                    handleChange={handleChange}
                    getShelf={getShelf} />
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    )
  }
}

export default SearchBook
