import style from './Project.module.css'


export const Project = (props) => {
  return(
      <div className={style.project}>
          <div className={style.backgroundImage}>
              <a>Show</a>
          </div>
          <h3>{props.name}</h3>
          <span>description: {props.descrition}</span>

      </div>
  )
}