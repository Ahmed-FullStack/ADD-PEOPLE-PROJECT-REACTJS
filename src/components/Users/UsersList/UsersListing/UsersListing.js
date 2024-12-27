import Card from '../../../UI/Card/Card'
import User from '../User/User'
import styles from './UsersListing.module.css'

const UsersListing = props => {
	return (
		<Card className={styles['card-container']}>
			{props.userList.map(list => (
				<User
					key={list.id}
					id={list.id}
					username={list.username}
					age={list.age}
					onDelete={props.onDeleteUser}
				/>
			))}
		</Card>
	)
}
export default UsersListing
