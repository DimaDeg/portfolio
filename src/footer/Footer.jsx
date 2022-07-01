import style from './Footer.module.scss';

export const Footer = () => {
    return(
        <div className={style.footerBox}>

            <div className={style.footerContainer}>
                <h3 className={style.header}>Dmitry Degtyarov</h3>
                <div className={style.boxes}>
                    <div className={style.box}/>
                    <div className={style.box}/>
                    <div className={style.box}/>
                    <div className={style.box}/>
                </div>
            </div>

        </div>
    )
}