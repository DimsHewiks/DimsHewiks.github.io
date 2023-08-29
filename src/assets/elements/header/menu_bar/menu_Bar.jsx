import styles from './menu_Bar.module.css'



function LoginWindow({BGThemesEl}){


    return(
        <>
            <div className={styles.Item} style={{backgroundColor:`${BGThemesEl}`}}>
                <div className={styles.Title__Block}>
                    <h3>Авторизация</h3>
                </div>
                <form className={styles.formReg}>
                    <input type="text" placeholder="Введите логин" className={styles.InputText}/>
                    <input type="password" placeholder="Введите пароль" className={styles.InputText}/>
                    <input type="button" className={styles.InputButton__Log} value="Войти"/>
                    <a href="#" className={styles.LogIn__Link}>Ещё не зарегистрировались?</a>
                </form>
            </div>
        </>
    )
}
export default LoginWindow;
