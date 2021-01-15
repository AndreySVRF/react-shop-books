const initialState = {
  books: [
    {
      id: 0,
      title: 'Book 1'
    }
  ]
}

export const reducerBooks = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_BOOKS':
      return {
        ...state,
        books: action.payload
      }
    case 'ADD_BOOKS':
      return {
        ...state,
        books: [...state.books, action.payload]
      }
    default:
      return state;
  }
}