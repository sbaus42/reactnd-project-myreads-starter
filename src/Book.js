import React from 'react'

const Book = (props) => {
  let { title, authors, imageLinks, id, shelf } = props.bookInfo
  let { handleChange, bookInfo } = props

  shelf = shelf || 'none'

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${imageLinks.thumbnail}")` }}>
        </div>
        <div className="book-shelf-changer">
          <select onChange={(event) => {handleChange(bookInfo, event.target.value)}}
            id={id}
            defaultValue={shelf}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      {authors && authors.map(author =>
        <div className="book-authors" key={author}>{author}</div>
      )}
    </div>
  )
}

export default Book
