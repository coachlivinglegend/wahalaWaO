//this is where the magic happens.
//import the constants here as well
import {
    CHANGE_TEXT_FIELD,
    UPDATE_TODO_ARRAY,
    SET_BACKGROUND_COLOR,
    HANDLE_CHANGE,
    DELETE_TODO
} from './constants.js';

//we need the store here so you have to import it here
import {todoStore} from './todosData'


//because the reducer takes in state and action, we have to declare our state
//usually,  we hjave one object per state property but if you have a reducer that uses two or more of your different states, it wouldn't make sense to seperate them
//also, if you have two reducers using the same state property, it also wouldn't make any sense to seperate them
const initialStateArray = {
    todos: todoStore,
    textfield: '',
    backColor: ''
}

//here we have quite a couple of action types but since they perfrom their operations on the same state, we can put them in one reducer and use action.type to sepearet them. 
export const setArray = (state=initialStateArray, action={}) => {
    switch(action.type) {
        case CHANGE_TEXT_FIELD:
            return ({
                ...state,
                textfield: action.payload
            })
        case SET_BACKGROUND_COLOR:
            return ({
                ...state,
                backColor: action.payload
            })
        case UPDATE_TODO_ARRAY:
            //as you can see here, these are your normal functions with one or two differences sha
            if (state.textfield.length !== 0) {
                var newTodo = {
                    id: Date.now(),
                    text: state.textfield,
                    status: false,
                    background: state.backColor,
                  }
            } else {
                return state
            }
            return ({
                ...state,
                todos: state.todos.concat(newTodo),
                textfield: ""
            });
        case HANDLE_CHANGE:
            //see how we used action.payload to pass in our (id) parameter
            var updatedItems = state.todos.map(todo => {
                if (action.payload === todo.id)
                  todo.status = !todo.status;
                return todo;
              });
            return ({
                ...state,
                todos: updatedItems
            })
        case DELETE_TODO:
            var itemsToBeDeleted = state.todos.filter(todo => {
                return todo.status === false
            })
            return ({
                ...state,
                todos: [].concat(itemsToBeDeleted)
            })
        default:
            return state;
    }
}
