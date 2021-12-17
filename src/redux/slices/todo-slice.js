import {createSlice} from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        todoList: [
            {
                isDone: false,
                title: 'Start making a presentation',
                id: 1
            },
            {
                isDone: false,
                title: 'Tooooo loooong taaaask soooo can’t ignoooore this',
                id: 2
            },
            {
                isDone: false,
                title: 'Task',
                id: 3
            },
            {
                isDone: true,
                title: 'Buy a chocolate for Charlotte',
                id: 4
            },
        ]
    },
    reducers: {
        taskDone: (state, action) => {
            const id = action.payload.id
            // const index = state.todoList.findIndex(i => i.id === action.payload.id)

            for (let i = 0; i < state.todoList.length; i++){
                if (state.todoList[i].id === id) {
                    state.todoList[i].isDone = !state.todoList[i].isDone
                }
            }
            // console.log('Индекс: ' + index)
            // console.log('todolist id: ' + state.todoList[index].id)
            // console.log('3 console: ' + state.todoList)
        },
        addTask: (state, action) => {
            const title = action.payload.title

            state.todoList.push({
                isDone: false,
                title: title,
                id: state.todoList.length + 1
            });
        },

        removeTask: (state, action) => {
            const id = action.payload.id
            const indexRemove = state.todoList.findIndex(i => i.id === id)

            if (indexRemove === -1) {
                console.error('Ошибка!')
                return
            }

            state.todoList.splice(indexRemove, 1)
            for (let i = indexRemove; i < state.todoList.length; i++) {
                state.todoList[i].id = state.todoList[i].id -1
            }
        }
    }
})


/*
* Selectors
* */
export const todoListSelector = (store) => store.todo.todoList


/*
* Actions
* */
export const {
    taskDone,
    addTask,
    removeTask,
} = todoSlice.actions



/*
* Reducer
* */
export const todoReducer = todoSlice.reducer;




