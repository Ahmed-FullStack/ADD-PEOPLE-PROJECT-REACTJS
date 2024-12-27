import React, { useRef, useState } from 'react'
import Button from '../../UI/Button/Button'
import Card from '../../UI/Card/Card'
import ErrModal from '../../UI/ErrModal/ErrModal'
import styles from './AddUser.module.css'
const AddUser = props => {
	const useRefCustom = intitalValue => {
		return { current: intitalValue }
	}
	const userNameINput = useRefCustom()
	const ageInput = useRefCustom()
	const [isModalOpen, setModalOpen] = useState()
	const removeModalHandler = () => {
		setModalOpen()
	}
	const submitHandler = e => {
		e.preventDefault()
		const enteredUserName = userNameINput.current.value
		const enteredAgeInput = ageInput.current.value
		const enteredData = {
			username: enteredUserName,
			age: +enteredAgeInput,
			id: Math.floor(Math.random() * 2030 + 23).toString(),
		}
		if (
			enteredUserName.trim().length === 0 ||
			enteredAgeInput.trim().length === 0
		) {
			setModalOpen({
				title: 'Invalid Input!',
				message: 'Please Enter Valid Username and Age',
			})
			return
		}
		if (+enteredAgeInput <= 0) {
			setModalOpen({
				title: 'Invalid Age!',
				message: `Come on ${enteredAgeInput} doesn't make senses. Enter Valid Age`,
			})
			return
		}
		props.onAddUser(enteredData)
	}
	return (
		<>
			{isModalOpen && (
				<ErrModal
					title={isModalOpen.title}
					message={isModalOpen.message}
					onCloseModal={removeModalHandler}
				/>
			)}
			<form onSubmit={submitHandler}>
				<Card className={styles.form}>
					<div className={styles['input-flex']}>
						<label htmlFor='username'>Username</label>
						<input
							id='username'
							type='text'
							autoComplete='off'
							name='username'
							ref={userNameINput}
						/>
					</div>
					<div className={styles['input-flex']}>
						<label htmlFor='age'>Age</label>
						<input id='age' type='number' name='age' ref={ageInput} />
					</div>
					<Button type='submit' className={styles['form-btn']}>
						Add User
					</Button>
				</Card>
			</form>
		</>
	)
}

export default AddUser
