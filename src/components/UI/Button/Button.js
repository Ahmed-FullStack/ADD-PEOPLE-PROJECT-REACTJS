import styles from './Button.module.css'
const Button = props => {
	const classesName = `${styles.btn} ${props.className}`
	return (
		<button
			type={props.type || 'button'}
			onClick={props.onClick}
			className={classesName}
		>
			{props.children}
		</button>
	)
}

export default Button
