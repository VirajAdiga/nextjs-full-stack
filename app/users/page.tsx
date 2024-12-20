import React from 'react'

interface User {
  id: number,
  name: string,
  email: string
}

const usersPage = async () => {

  {/* Disabling caching to make it Dynamic rendered instead of static rendered */}
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {cache: 'no-store'})
  const users: User[] = await response.json()

  return (
    <div>
      <h1>Users</h1>
      <div>{new Date().toLocaleString()}</div>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default usersPage