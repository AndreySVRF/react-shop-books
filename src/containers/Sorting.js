import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sortingActions from '../actions/sorting';
import Sorting from '../components/Sorting';

const mapStateToProps = ({ books }) => ({
  sortingBy: books.sortingBy
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(sortingActions, dispatch)

});

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
