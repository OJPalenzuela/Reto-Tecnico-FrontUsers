import React from 'react'
import { useDispatch } from 'react-redux';
import { activeUser } from '../redux/actions/usersActions';

const Card = ({user}) => {
    
    const dispatch = useDispatch()

    const handleDelete = (id) => {
     };
     
     const handleEdit = (user) => {
         dispatch(activeUser(user))
         console.log('editar')
     }

    return (
        <div className="col-md-4 ms-5">
                        <div className="card mb-1" >
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <h4>{user.name}</h4>
                                    <div>
                                        <i className="material-icons text-danger"
                                            onClick={() => handleDelete(user.id)}
                                        >
                                            close
                                        </i>

                                        <i
                                            className="material-icons"
                                            onClick={() => handleEdit(user)}
                                             >
                                            create
                                        </i>
                                    </div>
                                </div>
                                <p>{user.email}</p>
                            </div>
                        </div>
                        </div>
    )
}

export default Card
