import style from './Footer.module.css';
import con from '../common/styles/Container.module.css'

export const Footer = () => {
    return(
        <div className={style.footerBox}>

            <div className={`${con.container} ${style.footerContainer}`}>
                <h3>Dmitry Degtyarov</h3>
                <div className={style.boxes}>
                    <div className={style.box}/>
                    <div className={style.box}/>
                    <div className={style.box}/>
                    <div className={style.box}/>
                </div>
                <h6>All Rights Reserved</h6>
            </div>

        </div>
    )
}