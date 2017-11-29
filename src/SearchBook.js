import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchBook extends Component {
  state = {
    foundBooks: []
  }

  searchStuff = (query) => {
    BooksAPI.search(query).then(response => {
      response = response || {}
      console.log(response)
      if(response.hasOwnProperty('error') || response === {}) {
        this.setState({ foundBooks: [] })
      } else {
        this.setState({foundBooks: response})
      }
    })
  }

  render() {
    const handleChange = this.props.handleChange
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
          <ol className="books-grid">
            {this.state.foundBooks.map(book => (
              <li key={book.id}>
                <Book bookInfo={book} handleChange={handleChange}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBook
