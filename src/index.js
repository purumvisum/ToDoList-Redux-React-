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


/*
 * Store
 */

const store = createStore(todo,   window.devToolsExtension ? window.devToolsExtension() : f => f);

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
