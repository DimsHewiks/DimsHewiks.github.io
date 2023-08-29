import styles from './Error.module.css'

function Error(){
    return(
        <div className={styles.Item}>
            <div className={styles.SubItem}>
                <div className={styles.Logo}>
                    <img src="../404Eror.png"/>
                </div>
                <div className={styles.Title}>
                    <h1>ERROR - 404</h1>
                </div>
                <div className={styles.Text}>
                    <p>Упс...Кажется такой страницы не существует</p>
                </div>
            </div>
        </div>
    )
}
export default Error;