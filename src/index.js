import { createStore, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist'

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

const store = compose(autoRehydrate())(createStore)(todo)
persistStore(store);

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

