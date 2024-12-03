import React from 'react'

interface User {
  id: number,
  name: string
}

const usersPage = async () => {

  {/* Disabling caching to make it Dynamic rendered instead of static rendered */}
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {cache: 'no-store'})
  const users: User[] = await response.json()

  return (
    <div>
      <h1>Users</h1>
      <div>{new Date().toLocaleString()}</div>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default usersPage