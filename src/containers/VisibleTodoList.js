import { connect } from 'react-redux'
import { toggle, remove } from '../actions/actions'
import TodoList from '../components/ToDoVisibleList'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_IN_ACTIVE':
            return todos.filter(t => t.done)
        default:
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.done)
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.filter),
        emptyText: state.emptyText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggle(id))
        },
        onTodoRemove: (id) => {
            dispatch(remove(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList