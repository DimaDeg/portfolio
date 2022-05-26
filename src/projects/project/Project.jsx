import style from './Project.module.scss'


export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.backgroundImage} style={props.style}>
                <div className={style.button}><a>Demo</a></div>
                <div className={style.button}><a>Source</a></div>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.name}</h3>
                <span className={style.description}> stack: {props.descrition}</span>
            </div>
        </div>
    )
}