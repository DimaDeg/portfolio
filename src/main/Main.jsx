import style from './Main.module.css'
import con from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={style.main}>
            <div className={con.container}>
                <div className={style.preview}>
                    <span>Hi There</span>
                    <h1>I'm Dmitry Degtyarov</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}>
                </div>
            </div>
        </div>
    )
}