import { types } from "../types/types";

const usersReducer = (state = [], action) =>{
    switch (action.type){
        case types.getUsers:
            return action.payload
        default:
            return state
    }
}

const userActive = (state = {}, action) =>{
    switch (action.type){
        case types.userActive:
            return action.payload
        default:
            return state
    }
}

export {usersReducer, userActive}