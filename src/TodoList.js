import React from 'react'
import Todo from './Todo'

const TodoList = ({ todoStored , handleChange , changeContent, changeContentBack}) => {
    return (
        <div className="todoWrapper">
            {
                todoStored.map((todo) => {
                    return (
                        <Todo 
                            key={todo.id} 
                            text={todo.text} 
                            id={todo.id} 
                            status={todo.status} 
                            background={todo.background} 
                            handleChange={handleChange}  
                            changeContent={changeContent}              
                            changeContentBack={changeContentBack}              
                        />
                    )
                })
            }
        </div>
    )
}


export default TodoList