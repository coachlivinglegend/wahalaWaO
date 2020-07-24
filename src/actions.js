//it is industry standard to use our action types as constants, so we have a folder for that which we then import.
import {
    CHANGE_TEXT_FIELD,
    UPDATE_TODO_ARRAY,
    SET_BACKGROUND_COLOR,
    HANDLE_CHANGE,
    DELETE_TODO
} from './constants.js';


//can you see how we are passing our arguments from the main app page as props here and putting it in the payload.
//you can put other name/value pairs in your action function object but type is the koko
export const setTextField = (text) => {
    return ({
        type: CHANGE_TEXT_FIELD,
        payload: text
    })
}

export const addToArray = () => {
return ({
        type: UPDATE_TODO_ARRAY,
    })
}

export const setBackColor = (text) => {
    return ({
        type: SET_BACKGROUND_COLOR,
        payload: text

    })
}

export const handleCheckChange = (id) => {
    return({
        type: HANDLE_CHANGE,
        payload: id
    })
}

export const handleDeleteItem = () => {
    return ({
        type: DELETE_TODO
    })
}