import style from './Title.module.scss';

export const MyTitles = (props) => {
    return(
        <div className={style.title}>
            <h2>{props.title}</h2>
        </div>
    )
}