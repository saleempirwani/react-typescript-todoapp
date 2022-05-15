import React, { useState } from 'react'
import { Todo } from './types'

const App: React.FC = () => {

    const [text, setText] = useState<string>('')
    const [todos, setTodos] = useState<Todo[]>([])


    const addTodo = (e: React.MouseEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if (text) {
            setTodos((prev) => [...prev, { text, completed: false }])
            setText('')
        }
    }

    const onCompletedTodo = (item: Todo, index: number): void => {
        const todos_temp = [...todos]
        todos_temp.splice(index, 1)
        const new_todo = { text: item.text, completed: !item.completed }
        const new_todos = [...todos_temp, new_todo]
        const completedTodos = new_todos.filter((item) => item.completed === true)
        const unCompletedTodos = new_todos.filter((item) => item.completed === false)
        setTodos([...completedTodos, ...unCompletedTodos])
    }

    return (
        <div>

            <form action="" onSubmit={addTodo}>
                <input type="text" name="" id="" value={text} onChange={(e) => setText(e.target.value)} />
                <button type='submit'>Add Todo</button>
            </form>
            <br /><br /><br />
            {
                todos.map((item: Todo, index: number) => (
                    <div key={index}>
                        <input type="checkbox" onChange={() => onCompletedTodo(item, index)} checked={item.completed} />
                        <label style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.text}</label>
                    </div>
                ))
            }
        </div>
    )
}


export default App