import React, { Component } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class BooksIndex extends Component {
  humanize(camelCasedTitle) {
    return camelCasedTitle
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase())
  }

  render() {
    const { books } = this.props

    let shelfs = {}

    books.forEach((book) => {
      if (shelfs.hasOwnProperty(book.shelf)) {
        shelfs[book.shelf]['books'].push(book)
      } else {
        shelfs[book.shelf] = {}
        shelfs[book.shelf]['title'] = this.humanize(book.shelf)
        shelfs[book.shelf]['books'] = [book]
      }
    })

    let component_shelfs = []

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
}

export default BooksIndex
