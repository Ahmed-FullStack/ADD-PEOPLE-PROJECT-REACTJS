import Button from '../../../UI/Button/Button'
import Card from '../../../UI/Card/Card'
import styles from './User.module.css'
const User = props => {
	const deleteHandler = e => {
		props.onDelete(props.id)
	}
	const editeHandler = e => {
		props.onDeljete(props.id)
	}
	return (
		<Card className={styles.card}>
			<div className={styles['card__info']}>
				<h3>{props.username}</h3>
			</div>
			<div className={styles['card__info']}>
				<h3>{props.age}</h3>
				<Button onClick={deleteHandler} className={styles['card__btn']}>
					Delete
				</Button>
				<Button
					onClick={editeHandler}
					className={`${styles['card__btn-edit']} ${styles['card__btn']}`}
				>
					Edit
				</Button>
			</div>
		</Card>
	)
}
export default User
