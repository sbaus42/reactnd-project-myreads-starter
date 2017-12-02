import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

const BookShelf = (props) => {
  const { books, title, handleChange, getShelf } = props

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book bookInfo={book}
                handleChange={handleChange}
                getShelf={getShelf}/>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

BookShelf.PropTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default BookShelf
