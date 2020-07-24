import React from 'react';

// class EditTodo extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             textfield: '',
//             backColor: ''
//           }
//     }
      
//     editTodo =(event) => {
//         event.preventDefault()


//     }

//     render() {
//         return (
//             <form className="todoform" onSubmit={this.addTodo}>
        
//             <input onChange={this.textChange} className="textInput" type="text" placeholder="Add New Item" value={} name="textfield"/>

//             <select name="backColor" onChange={this.changeColor}>
//             <option>Choose a color</option>
//             <option value="green">Green</option>
//             <option value="pink">Pink</option>
//             <option value="brown">Brown</option>
//             <option value="purple">Purple</option>
//             <option value="blue">Blue</option>
//             </select>

//             <button onClick={this.editTodo}>Save</button>

//         </form>

//         )
//     }
// }

class Todo extends React.Component {
    constructor(props) {
        super(props)
    }
    
    
    render() {
        const { text, id, status, background, handleChange, changeContent, changeContentBack } = this.props
        let itemClass = "tick " + (status ? "checked" : null) 
        let idToUse = `id${id}`
        let wrapIdToUse = `wrapId${id}`
        return (
            <div className="todoItem" style={{background: background}}>
                <div className={itemClass}>
                    <input name={`todoitem${id}`} 
                    type="checkbox" 
                    checked={status}
                    onChange={() => handleChange(id)}
                    />
                </div>
                <div className="label">
                    <p onClick={() => changeContent(idToUse, wrapIdToUse)} className="editShow" id={idToUse}>{text}</p>
                    <div onClick={() => changeContentBack(idToUse, wrapIdToUse)} tabIndex="-1" className="toEditNoShow" id={wrapIdToUse}>
                    </div>
                </div>
            </div>
        )

    }    
}    




export default Todo