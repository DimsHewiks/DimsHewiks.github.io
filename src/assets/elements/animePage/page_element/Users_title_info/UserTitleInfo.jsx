import styles from './UserTitleInfo.module.css'


function UserTitleInfo({info, BGthemes, BGthemesEl, BGthemesElText}){
    return(
        <div className={styles.Item} style={{backgroundColor:`${BGthemes}`}}>
            <div className={styles.ChildItem} style={{backgroundColor:`${BGthemesEl}`}}>
                <div className={styles.Button}>
                    <form className={styles.Form}>
                        <label htmlFor = 'selector'>добавть в список:</label>
                        <select id='selector' name='status'>
                            <option value='' disabled selected>Выберите...</option>
                            <option value='watching'>Смотрю</option>
                            <option value='Viewed'>Просмотрено</option>
                            <option value='Watch_Later'>Смотреть позже</option>
                            <option value='abandoned'>брошено</option>
                            <option value='review'>Пересматриваю</option>
                        </select>
                    </form>
                </div>
                <div className={styles.Info}>
                    <div className={styles.info_Users } style={{color: `#4ecd32`}}>
                        <div className={styles.name}><p>Смотрю:</p></div>
                        <div className={styles.rating}><p>11%</p></div>
                    </div>
                    <div className={styles.info_Users} style={{color: `#f5944e`}}>
                        <div className={styles.name}><p>Просмотрено:</p></div>
                        <div className={styles.rating}><p>29%</p></div>
                    </div>
                    <div className={styles.info_Users} style={{color: `#4e75f5`}}>
                        <div className={styles.name}><p>Смотреть позже:</p></div>
                        <div className={styles.rating}><p>10%</p></div>
                    </div>
                    <div className={styles.info_Users} style={{color: `#ed475d`}}>
                        <div className={styles.name}><p>брошено:</p></div>
                        <div className={styles.rating}><p>39%</p></div>
                    </div>
                    <div className={styles.info_Users} style={{color: `#47eded`}}>
                        <div className={styles.name}><p>Пересматриваю:</p></div>
                        <div className={styles.rating}><p>7%</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserTitleInfo;