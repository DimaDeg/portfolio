import style from './Skill.module.scss'

export const Skill = (props) => {
    return(
        <div className={style.skill}>
            <div className={style.backIcon}><img src={props.icon}/></div>
            <h3>{props.title}</h3>
        </div>
    )
}