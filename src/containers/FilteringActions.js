import { connect } from 'react-redux'
import BottomFilters from '../components/BottomActions'
import {filterActive, filterInActive, filterAll} from '../actions/actions';

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => ({
    showActive() {
        dispatch(filterActive())
    },
    showInActive() {
        dispatch(filterInActive());
    },
    showAll() {
        dispatch(filterAll());
    }
})

const FilterActions = connect(
    mapStateToProps,
    mapDispatchToProps
)(BottomFilters);

export default FilterActions