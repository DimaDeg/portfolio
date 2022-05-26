import style from './Contacts.module.css';
import con from '../common/styles/Container.module.css'

export const Contacts = () => {
    return(
        <div className={style.contacts}>
            <div className={`${con.container} ${style.contactsContainer}`}>
                <h2>Contacts</h2>
                <form className={style.form}>
                    <input/>
                    <input/>
                    <textarea/>
                    <div className={style.sendButton}><a>Send</a></div>
                </form>


            </div>


        </div>
    )
}