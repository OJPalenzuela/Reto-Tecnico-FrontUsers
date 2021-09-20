
const URL = "https://jsonplaceholder.typicode.com/users"

const getUsers = async () => {
    const result = await fetch(URL)
    return result.json()
}

export {getUsers}