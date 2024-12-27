import React, { useState } from 'react'
import './App.css'
import Card from './components/UI/Card/Card'
import AddUser from './components/Users/UserForm/AddUser'
import UsersListing from './components/Users/UsersList/UsersListing/UsersListing'
import styles from './components/Users/UsersList/UsersListing/UsersListing.module.css'
const usersList = [
	{
		id: 'ek1',
		username: 'ahmed',
		age: 14,
	},
	{
		id: 'ek2',
		username: 'asad',
		age: 21,
	},
]
function App() {
	const [users, setUsers] = useState(usersList)
	const addUserHandler = addedUser => {
		setUsers(prevsUsers => {
			const previousUsers = [...prevsUsers]
			previousUsers.unshift(addedUser)
			return previousUsers
		})
	}
	const deleteUserHander = deletedId => {
		setUsers(prevsUsers => {
			return prevsUsers.filter(user => user.id !== deletedId)
		})
	}
	let content = (
		<Card className={`${styles['card-container']} ${styles['padding']}`}>
			<p>No Items Found</p>
		</Card>
	)
	if (users.length > 0) {
		content = <UsersListing userList={users} onDeleteUser={deleteUserHander} />
	}
	return (
		<>
			<AddUser onAddUser={addUserHandler} />
			{content}
		</>
	)
}

export default App
