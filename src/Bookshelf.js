import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {
  render() {
    const { books } = this.props
    debugger

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Component Test</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.forEach((book) => (
              <li key={book.id}>
                <Book bookInfo={book} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf
