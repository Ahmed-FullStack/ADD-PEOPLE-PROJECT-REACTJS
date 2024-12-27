import ReactDOM from 'react-dom'
import Button from '../Button/Button'
import classes from './ErrModal.module.css'

const BackDrop = props => {
	return (
		<div
			className={`${classes['backdrop']} ${classes['appear']}`}
			onClick={props.onConfirm}
		></div>
	)
}
const Modal = props => {
	return (
		<div className={classes['modal-box']}>
			<div className={`${classes['text-wrapper']}`}>
				<h3>{props.title}</h3>
				<p>{props.message}</p>
			</div>
			<Button
				className={`${classes['btn']} ${classes['false']}`}
				onClick={props.onConfirm}
			>
				Okay
			</Button>
		</div>
	)
}

const ErrModal = props => {
	return (
		<>
			{ReactDOM.createPortal(
				<BackDrop onConfirm={props.onCloseModal} />,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<Modal
					title={props.title}
					message={props.message}
					onConfirm={props.onCloseModal}
				/>,
				document.getElementById('overlay-root')
			)}
		</>
	)
}

export default ErrModal
