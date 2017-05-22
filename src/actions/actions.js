/*
 * Actions
 */

let index = 0;

export function addToDo(text) {
    return {
        type: "ADD_TODO",
        text: text,
        id: index++
    }
}

export  function toggle(id) {
    return {
        type: "TOGGLE_TODO",
        id: id
    }
}

export  function remove(id) {
    return {
        type: "REMOVE_TODO",
        id: id
    }
}

export  function filterActive() {
    return {
        type: "SHOW_ACTIVE"
    }
}

export  function filterInActive() {
    return {
        type: "SHOW_IN_ACTIVE"
    }
}

export  function filterAll() {
    return {
        type: "SHOW_ALL"
    }
}
