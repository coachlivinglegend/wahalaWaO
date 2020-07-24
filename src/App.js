import React from 'react';
//connect works with provider to pass props i.e state and action
import { connect } from 'react-redux';
import TodoList from "./TodoList";
import './App.css';

//no state here so no need for importing the todostore here
// import {todoStore} from './todosData'

//you import all your actions here
import { setTextField, setBackColor, addToArray, handleCheckChange, handleDeleteItem } from './actions'

//we use the connect function to use provider to pass props which are the state and actions to our app

//mapstatetoprope is a function that takes in the sttae and returns an object basically containing state with each state defined with the state the reducer taht works on them give
const mapStateToProps = state => {
  return {
    todos: state.setArray.todos,
    textfield: state.setArray.textfield,
    backColor: state.setArray.backColor
  }
}

//mapdispatchtoprops, here we dispatch our actions, it takes in the dispatch params and returns an object
//the property of the object is thate name you'll like to call your action which is diffferent from what you've called it in yuor action or reducer
//the value of each property is a function as defined in your actions. you can also pass arguments here if the function in your reducer needs an argument,
//you'll define this argument in your action under payload which you'll now pass to the reducer 
const mapDispatchToProps = dispatch => {
  return {
    onTextChange: (event) => dispatch(setTextField(event.target.value)),
    onChangeColor: (event) => dispatch(setBackColor(event.target.value)),
    // onChangeColor: (event) => {
    //   const { name , value } = event.target
    //   dispatch(setBackColor( { [name] : value }))
    // },
    onAddTodo: (event) => dispatch(addToArray(event.preventDefault())),
    onHandleCheckChange: (id) => dispatch(handleCheckChange(id)),
    onHandleDeleteItems: () => dispatch(handleDeleteItem())
  }
}

class App extends React.Component {
  //no more constructor
  // constructor() {
  //   super()
  //   this.state = {
  //     todos: todoStore,
  //     textfield: '',
  //     backColor: ''
  //   }
  // }
  
  // handleChange = (id) => {
  //   var updatedItems = this.state.todos.map(todo => {
  //       if (id === todo.id)
  //         todo.status = !todo.status;
        
  //       return todo;
  //     });
      
  //     this.setState({
  //       todos: updatedItems
  //     });   
  // }
  
  
  // addTodo = (event) => {
  //   event.preventDefault();
  //   if (this.state.textfield.length !== 0) {
  //     var newTodo = {
  //         id: Date.now(),
  //         text: this.state.textfield,
  //         status: false,
  //         background: this.state.backColor,
  //       };
  //     this.setState((prevState) => ({
  //       todos: prevState.todos.concat(newTodo),
  //       textfield: ""
  //     })); 
  //   }
  // }
  
  // textChange = (event) => {
  //   this.setState({ textfield: event.target.value })
  // }
  
  // changeColor = (event) => {
  //   const { name , value } = event.target
  //   this.setState( { [name] : value })
  // }

  // deleteItems = () => {
  //   var itemsToBeDeleted = this.state.todos.filter(todo => {
  //     return todo.status === false
  //   })
    
  //   this.setState({
  //     todos: [].concat(itemsToBeDeleted)
  //   })
  // }

  changeContent =(idToUse, wrapIdToUse) => {
    const main = document.getElementById(idToUse)
    const mainEdit = document.getElementById(wrapIdToUse)
    main.classList.remove("editShow")
    main.classList.add("editNoShow")
    mainEdit.classList.remove("toEditNoShow")
    mainEdit.classList.add("toEditShow")
    console.log("clicked")
  }

  changeContentBack =(e, idToUse, wrapIdToUse) => {
    // const main = document.getElementById(idToUse)
    // const mainEdit = document.getElementById(wrapIdToUse)
    // main.classList.remove("editNoShow")
    // main.classList.add("editShow")
    // mainEdit.classList.remove("toEditShow")
    // mainEdit.classList.add("toEditNoShow")
    // console.log("clickedd")


  //   document.getElementById(wrapIdToUse).onfocus = function() {
  //     alert('focused');
  //  }
  //  document.getElementById(wrapIdToUse).onblur = function() {
  //     alert('blur');
  //  }
  }


  render() {
    const { todos, textfield, backColor, onTextChange, onChangeColor, onAddTodo, onHandleCheckChange, onHandleDeleteItems} = this.props
    let itemsToDelete = todos.filter(todo=> {
      return todo.status === true
    })

    let numberOfItems = itemsToDelete.length
    return (
      <div className="Wrapper">

        <div style = {{display:"flex", alignItems:"center", justifyContent:"space-between"}}>

          <p>React Todo List </p>
          <span onClick={onHandleDeleteItems}> {numberOfItems ? "Clear Completed Items" + "(" + numberOfItems + ") " : null} </span>

        </div>

        <div className="formWrap">

        {todos.length === 0 ? <div> You do not have any item on your to-do list. </div> : 

          <TodoList todoStored={todos} changeContent={this.changeContent} changeContentBack={this.changeContentBack} handleChange={onHandleCheckChange}/>
        
        }

          <form className="todoform" onSubmit={onAddTodo}>

            <input onChange={onTextChange} value={textfield} className="textInput" type="text" placeholder="Add New Item" name="textfield"/>

            <select value={backColor} name="backColor" onChange={onChangeColor}>
              <option>Choose a color</option>
              <option value="green">Green</option>
              <option value="pink">Pink</option>
              <option value="brown">Brown</option>
              <option value="purple">Purple</option>
              <option value="blue">Blue</option>
            </select>

            <button>Add</button>

          </form>

        </div>

      </div>
    )
  }
}

//don't forget to connect to your app. no pun intended.
export default connect(mapStateToProps, mapDispatchToProps)(App);
