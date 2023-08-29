import styles from './webInfo.module.css'

function WebInfo ({BGthemes, BGthemesEl, BGthemesElText}){
    return(
        <>
        <div className={styles.item} style={{backgroundColor:`${BGthemes}`}}>
            <div className={styles.SubItem} style={{backgroundColor:`${BGthemesEl}`}}>
                <div className={styles.TitleBlock}>
                    <h2 style={{color:`${BGthemesElText}`}}>О нас</h2>
                </div>
                <div className={styles.Content}>
                    <div className={styles.Img_Block}>
                        <img src="../404Eror.png" />
                    </div>
                    <div className={styles.Text_Block}>
                        <div className={styles.Text_Block__Title}>
                            <p style={{color:`${BGthemesElText}`}}>А теперь немного о нас...</p>
                        </div>
                        <div className={styles.Text_Block__SubText}>
                            <p style={{color:`${BGthemesElText}`}}>
                                Hikkey - Это web-платформа для просмотра аниме.
                                Каждый день мы обновляем базу с тайтлами, чтобы в будущем собрать огромную коллекцию тайтлов.
                                Данный проект создан на чистом интузиазме, что значит, что сайт создаётся на чистом желании разработчиков.
                                Пока что сайт находится в бете, но в скором времени уже выйдет в релиз :)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default WebInfo;