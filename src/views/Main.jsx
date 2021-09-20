import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'

const Main = () => {

    const users = useSelector(state => state.users)
    
    return (
        <div className="d-flex flex-wrap">
            {
                users.map((user) => (
                    <Card user={user} />
                ))
            }
        </div>
    )
}

export default Main
