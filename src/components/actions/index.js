import * as types from "./../constants/ActionTypes";

// Xy ly hoac tra ve cac action => cac code thuc thi o duoi day no se thong qua switch cua file nao do trong recuder (folder)

export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
};

// tra ve tham so vua input va add 
export const saveTask = (task) => {
    return {
        type: types.SAVE_TASK,
        task //  task: task[id,name,status]
    }
}

// xu ly tra ve FORM(mo,dong,...) ten tham so nen ko task (data tra ve)

export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
}

export const openForm = () => {
    return {
        type: types.OPEN_FORM
    }
}

export const closeForm = () => {
    return {
        type: types.CLOSE_FORM
    }
}

export const updateStatus = (id) => { 
    return {
        type: types.UPDATE_STATUS_TASK,
        id // id: id
    }

}

export const deleteTask = (id) => {
    return { 
        type: types.DELETE_TASK,
        id // id: id
    }
}

export const editTask = (task) => {
    return {
        type: types.EDIT_TASK,
        task
    }
}

export const filterTask = (filter) => {
    return {
        type: types.FILTER_TABLE,
        filter // filter: filter -> filterName, filterStatus
    }
}

// search by keywords
export const searchTask = (keyword) => {
    return {
        type: types.SEARCH,
        keyword // keyword : keyword
    }
}

export const sortTask = (sort) => {
    return {
        type: types.SORT,
        sort // sort : sort -> sort.by sort.value
    }
}