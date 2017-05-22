/*
 * Reducers
 */

const initialState = {
    todos: [],
    filter: 'SHOW_ALL',
    emptyText: "Nothing to show :( "
};

export default function todo(state = initialState, action) {
    switch (action.type) {
        case "ADD_TODO":
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        done: false,
                        id: action.id
                    }
                ]

            });

        case "TOGGLE_TODO":
            return Object.assign({}, state, {
                todos: state.todos.map((todo) => {
                    if (todo.id === action.id) {
                        todo.done = !todo.done;
                        console.log(state)
                    }
                    return todo
                })
            });

        case "REMOVE_TODO":
            function detectIndex() {
                let index,
                    newArr = [];
                newArr.push(...state.todos);
                newArr.map((todo) => {
                    if (todo.id === action.id) {
                        index = newArr.indexOf(todo);
                        newArr.splice(index, 1)
                    }
                    return todo
                });

                return newArr
            }

            return Object.assign({}, state, {
                todos: detectIndex()

            });

        case "SHOW_ACTIVE":
            return Object.assign({}, state, {
                filter: "SHOW_ACTIVE",
                emptyText: "Nothing to do"
            });

        case "SHOW_IN_ACTIVE":
            return Object.assign({}, state, {
                filter: "SHOW_IN_ACTIVE",
                emptyText: "Nothing done"
            });

        case "SHOW_ALL":
            return Object.assign({}, state, {
                filter: "SHOW_ALL",
                emptyText: "Nothing to show"
            });

        default:
            return state
    }
}