import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../Redux/TodoSlice';

function ViewTodo() {
    const { todos } = useSelector(state => state.todo);
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }
    return (
        <div>
            {
                todos && todos.map((td, i) => (
                    <div style={{ display: "flex" }}>
                        <li key={i}><span>{i + 1}</span> {td.title} </li>
                        <button onClick={() => handleDelete(td.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default ViewTodo