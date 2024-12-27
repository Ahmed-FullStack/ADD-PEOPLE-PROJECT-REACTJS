import classes from './Card.module.css'
const Card = props => {
	const classesName = `${classes.card} ${props.className}`
	return <div className={classesName}>{props.children}</div>
}

export default Card
