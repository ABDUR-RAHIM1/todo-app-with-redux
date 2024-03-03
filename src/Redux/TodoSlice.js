import { createSlice } from "@reduxjs/toolkit"

const initalTodo = {
    todos: [
        {
            id: 1,
            title: "todo 1",
            desc: "todo description"
        },
        {
            id: 2,
            title: "todo 1",
            desc: "todo description"
        },
        {
            id: 3,
            title: "todo 1",
            desc: "todo description"
        },
    ]
}


export const todoSlice = createSlice({
    name: "todo",
    initialState: initalTodo,
    reducers: {
          showtodo : state => state,
          addTodo : (state, action) => {
            state.todos.push(action.payload)
          },

          deleteTodo : (state ,action)=> {
            const id = action.payload
             state.todos = state.todos.filter( td => td.id !== id)
          }
    }
})


export const {showtodo , addTodo , deleteTodo} = todoSlice.actions

export default todoSlice.reducer