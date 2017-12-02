import React from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const BooksIndex = (props) => {
  let humanize = (camelCasedTitle) => {
    return camelCasedTitle
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase())
  }

  const { books, handleChange, getShelf } = props

  let shelfs = {}
  let component_shelfs = []

  books.forEach((book) => {
    if (shelfs.hasOwnProperty(book.shelf)) {
      shelfs[book.shelf]['books'].push(book)
    } else {
      shelfs[book.shelf] = {}
      shelfs[book.shelf]['title'] = humanize(book.shelf)
      shelfs[book.shelf]['books'] = [book]
    }
  })

  for (const shelf in shelfs) {
    component_shelfs.push(shelfs[shelf])
  }

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {component_shelfs.map((shelf) => (
            <BookShelf
              books={shelf.books}
              title={shelf.title}
              handleChange={handleChange}
              getShelf={getShelf}
              key={shelf.title} />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  )
}

BooksIndex.propTypes = {
  books: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default BooksIndex
