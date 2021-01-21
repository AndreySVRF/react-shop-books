import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sortingActions from '../actions/sorting';
import Sorting from '../components/Sorting';

const mapStateToProps = ({ books, sorting }) => ({
  sortingBy: sorting.sortingBy
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(sortingActions, dispatch)

});

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
