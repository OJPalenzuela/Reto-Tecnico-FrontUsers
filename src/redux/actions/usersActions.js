/* import { db } from "../../firebase/firebaseConfig" */
import { getUsers } from "../../helpers/apiConnect"
import { types } from "../types/types"


export const findUsers = () =>{
    return (dispatch) =>{
        getUsers()
            .then((users) => {
                dispatch({
                    type: types.getUsers,
                    payload: users
                })
            })
    }
}


export const activeUser = (user) => {
    return{
        type:types.userActive,
        payload:{
            ...user
        }
    }
}

/* export const addUser = (data) => {
        return async (dispatch) => {
    
            try {
               await db.collection(`/User`).doc().set(data)
            } catch (e) {
                console.log(e)
            }
        }
} */