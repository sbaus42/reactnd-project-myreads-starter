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

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route path="/search" component={SearchBook} />
        <Route exact path='/' render={() =>
          <BooksIndex books={books} />
        } />
      </div>
    )
  }
}

export default BooksApp
