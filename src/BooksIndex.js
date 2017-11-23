import React, { Component } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class BooksIndex extends Component {
  render() {
    const { books } = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf books={books.filter(book => book.shelf === 'currentlyReading')} />
            <BookShelf books={books.filter(book => book.shelf === 'wantToRead')} />
            <BookShelf books={books.filter(book => book.shelf === 'read')} />
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BooksIndex
