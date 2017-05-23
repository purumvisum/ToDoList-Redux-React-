import throttle  from 'lodash/throttle';
import { createStore } from 'redux';

import {Provider} from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';

//components
import VisibleTodoList from "./containers/VisibleTodoList"
import FilterActions from "./containers/FilteringActions"

import ToDoForm from "./components/TodoTextField"

//reducer
import todo from "./reducers/reducers"

// local storage
import { loadState, saveState } from "./localst"

/*
 * Store
 */

const persistedState = loadState()
let store = createStore(
    todo,
    persistedState
);

store.subscribe(throttle(() => {
    saveState({
        todos: store.getState().todos
    });
}, 1000));

ReactDOM.render(
    <Provider store={store}>
        <div>
            <ToDoForm/>
            <VisibleTodoList/>
            <FilterActions />
        </div>
    </Provider>
    , document.getElementById('root')
);

