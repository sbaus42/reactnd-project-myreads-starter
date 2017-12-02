import React from 'react'
import noThumbnail from '../public/images/img_no_thumb.jpg'
import PropTypes from 'prop-types'

const Book = (props) => {
  let { title, authors, imageLinks, id } = props.bookInfo
  let { handleChange, bookInfo, getShelf } = props

  const thumbnail = imageLinks ? imageLinks.thumbnail : noThumbnail
  const displayShelf = getShelf(id)

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${thumbnail}")`,
            backgroundSize: 'contain' }}>
        </div>
        <div className="book-shelf-changer">
          <select onChange={(event) => {handleChange(bookInfo, event.target.value)}}
            id={id}
            defaultValue={displayShelf}>
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

Book.propTypes = {
  bookInfo: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default Book
