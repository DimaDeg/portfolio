import style from './Skill.module.scss'

export const Skill = (props) => {
    return(
        <div className={style.skill}>
            <div className={style.icon}>{props.icon}</div>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    )
}