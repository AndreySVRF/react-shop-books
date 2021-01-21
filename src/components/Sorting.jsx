import React from 'react';
import { Menu, Input } from 'semantic-ui-react';

const Sorting = ({setSorting, sortingBy, searchQuery, setSearchQuery}) => (
  <Menu vertical size='small'>
    <Menu.Item>
      <Input
        icon="search"
        value={searchQuery}
        placeholder="Поиск..."
        onChange={event => setSearchQuery(event.target.value)}
      />
    </Menu.Item>
    <Menu.Item
      active={sortingBy === 'all'}
      onClick={setSorting.bind(this, 'all')}
    >Все</Menu.Item>
    <Menu.Item
      active={sortingBy === 'author'}
      onClick={setSorting.bind(this, 'author')}
    >Автор</Menu.Item>
    <Menu.Item
      active={sortingBy === 'price_high'}
      onClick={setSorting.bind(this, 'price_high')}
    >Сначала дорогие</Menu.Item>
    <Menu.Item
      active={sortingBy === 'price_low'}
      onClick={setSorting.bind(this, 'price_low')}
    >Сначала дешевые</Menu.Item>
  </Menu>
)

export default Sorting;