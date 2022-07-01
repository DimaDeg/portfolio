import style from './Contacts.module.scss';
import {MyTitles} from  '../common/components/title/Title'

export const Contacts = () => {
    return(
        <div className={style.contacts}>
            <div className={style.contactsContainer}>
                <MyTitles title={'Contacts'}/>
                    <form className={style.form}>
                        <input autoComplete={'disabled'} placeholder={'e-mail'}/>
                        <input placeholder={'name'}/>
                        <textarea/>
                        <button type={'submit'} className={style.sendButton}>Send</button>
                    </form>
            </div>
        </div>
    )
}