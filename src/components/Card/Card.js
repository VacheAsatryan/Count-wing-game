

const Card = (props) => {
    return (
        <section onClick={props.onClick} className={props.className}>
            {props.children}
            <span> {props.countX} </span>
        </section>
    )
}

export default Card