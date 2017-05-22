import {createStore} from 'redux';
import {Provider, connect} from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';

//todo: must be removed
import {toggle, remove, addToDo, filter} from './actions/actions';

//components
import VisibleTodoList from "./containers/VisibleTodoList"
import FilterActions from "./containers/FilteringActions"

import ToDoForm from "./components/TodoTextField"

//reducer
import todo from "./reducers/reducers"


/*
 * Store
 */

let store = createStore(todo);

store.dispatch(addToDo("sdfvdasvgfdsfvg"));

ReactDOM.render(
    <Provider store={store}>
        <div>
            <ToDoForm store={store}/>
            <VisibleTodoList/>
            <FilterActions />
        </div>
    </Provider>
    , document.getElementById('root')
);
