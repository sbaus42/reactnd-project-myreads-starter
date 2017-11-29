import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import BooksIndex from './BooksIndex'
import SearchBook from './SearchBook'
import './App.css'
import { Route } from 'react-router-dom'

class BooksApp extends Component {
  state = { books: [] }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateBook = (updatedBook, shelf) => {
    BooksAPI.update(updatedBook, shelf).then(response => {
      updatedBook.shelf = shelf

      let newReads = this.state.books.filter(book => book.id !== updatedBook.id)
      if (shelf !== 'none') newReads.push(updatedBook)

      this.setState({ books: newReads })
    })
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route path="/search" render={() =>
          <SearchBook handleChange={this.updateBook} />
        } />
        <Route exact path='/' render={() =>
          <BooksIndex
            books={books}
            handleChange={this.updateBook} />
        } />
      </div>
    )
  }
}

export default BooksApp
