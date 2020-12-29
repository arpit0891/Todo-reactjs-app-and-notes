import React from "react"
function TodoItem(props){
    const completedStyle={
        fontStyle:"italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return (
    <div className="todo-item">    
    {/* <ul>
        <li>
            <input type="checkbox" />
            <p>Task 1</p>
        </li>
        <li>
        <input type="checkbox" />
            <p>Task 2</p>
        </li>
        <li>
        <input type="checkbox" />
            <p>Task 3</p>
        </li>
    </ul>  */}
    
    <input
     type="checkbox" 
     checked={props.item.completed}
     onChange={() => props.handleChange(props.item.id)} 
     />
     
    <p style={props.item.completed ? completedStyle: null}
    >
    {props.item.text}
    </p>
    </div>
    )
}
export default TodoItem