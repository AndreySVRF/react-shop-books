import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions  from '../actions/books';
import App from '../components/App';
import orderBy from 'lodash/orderBy';

const sortBy = (books, sortingBy) => {
  switch (sortingBy) {
    case 'all':
      return books;
    case 'author':
      return orderBy(books, 'author', 'asc');
    case 'price_high':
      return orderBy(books, 'price', 'desc');
    case 'price_low':
      return orderBy(books, 'price', 'asc');
    default:
      return books;
  }
}

const sortingBooks = (books, searchQuery) =>
  books.filter(obj => (
    obj.title.toLowerCase().indexOf(searchQuery.toLowerCase().trim()) >= 0 ||
    obj.author.toLowerCase().indexOf(searchQuery.toLowerCase().trim()) >= 0
  ))

const searchBooks = (books, sortingBy, searchQuery) => {
  return sortBy(sortingBooks(books, searchQuery), sortingBy)
}

const mapStateToProps = ({ books, sorting }) => ({
  books: books.items && searchBooks(books.items, sorting.sortingBy, sorting.searchQuery),
  isReady: books.isReady
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(booksActions, dispatch)

});

export default connect(mapStateToProps, mapDispatchToProps)(App);