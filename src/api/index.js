import {v4} from 'node-uuid';

const fakeDatabase = {
    todos: [{
        id: v4(),
        text: "1 todos",
        done: true
    }, {
        id: v4(),
        text: "2 todos",
        done: false
    }, {
        id: v4(),
        text: "3 todos",
        done: true
    }]
}

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) =>
    delay(500).then(() => {
        switch (filter) {
            case 'all':
                return fakeDatabase.todos;
            case 'active':
                return fakeDatabase.todos.filter(t => !t.done);
            case 'completed':
                return fakeDatabase.todos.filter(t => t.done);
            default:
                throw new Error(`Unknown filter: ${filter}`);
        }
    });