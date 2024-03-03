import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../Redux/TodoSlice';

function AddTodo() {
    const numberOfBooks = useSelector(state => state.todo.todos.length);
   const dispatch = useDispatch()
    const [data, setData] = useState({})
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = {
            id: numberOfBooks + 1,
            ...data
        }
        dispatch(addTodo(newTodo))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name='title' />
                <input onChange={handleChange} type="text" name='desc' />
                <button>add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo