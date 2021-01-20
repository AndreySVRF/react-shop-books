import React, {Component} from 'react';
import axios from 'axios';

import { Container, Card } from 'semantic-ui-react'
import Menu from './Menu';
import BookCard from './BookCard';
import Sorting from '../containers/Sorting';

import '../App.css';

class App extends Component {
  componentDidMount() {
    const { setBooks } = this.props;
    axios.get('./books.json').then(({ data }) => {
      setBooks(data);
    });
  }

  render() {
    const { books, isReady } = this.props;

    return (
      <Container>
        <Menu />
        <Sorting />
        <Card.Group itemsPerRow={4}>
          {!isReady
            ? 'Загрузка...'
            : books.map(book => (
                <BookCard {...book} key={book.id}/>
              ))
          }
        </Card.Group>
      </Container>
    );
  }
}

export default App;