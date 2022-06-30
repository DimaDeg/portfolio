import style from './Contacts.module.scss';
import con from '../common/styles/Container.module.css';
import {MyTitles} from  '../common/components/title/Title'

export const Contacts = () => {
    return(
        <div className={style.contacts}>
            <div className={`${con.container} ${style.contactsContainer}`}>
                <MyTitles title={'Contacts'}/>
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