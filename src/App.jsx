import React from 'react' 
import AddTodo from './components/AddTodo'
import ViewTodo from './components/ViewTodo'

function App() {
  return (
    <div style={{width:"70%", margin:"20px auto"}}>
        <AddTodo />
        <ViewTodo />
    </div>
  )
}

export default App