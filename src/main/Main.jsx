import style from './Main.module.scss'

export const Main = () => {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.photo}>
                </div>
                <div className={style.preview}>
                    <span>Hi There</span>
                    <h1 >I'm Dmitry Degtyarov</h1>
                    <p>Front-End Developer</p>
                </div>

            </div>
        </div>
    )
}