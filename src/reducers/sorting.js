const initialState = {
  searchQuery: '',
  sortingBy: 'all'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload
      }
    case 'SET_SORTING':
      return {
        ...state,
        sortingBy: action.payload
      }
    default:
      return state;
  }
}
