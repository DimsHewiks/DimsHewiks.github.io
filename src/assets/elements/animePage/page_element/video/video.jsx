import styles from './video.module.css'


function Video({info, BGthemes, BGthemesEl, BGthemesElText}){
    return(
        <div className={styles.Item} style={{backgroundColor:`${BGthemes}`}}>
            <div className={styles.ChildItem} style={{backgroundColor:`${BGthemesEl}`}} >
                <div className={styles.Video__Title}>
                    <div className={styles.Video_Title_Opt}>
                        <h3>Просмотр:</h3>
                    </div>
                </div>
                <div className={styles.ChildItem__Video}>
                <iframe src={`${info.AnimeVideoLink}`} frameBorder="0" scrolling="no" allowfullscreen="" width="94%" height="92%" style={{borderRadius:'5px'}}></iframe>
                </div>
                
            </div>
        </div>
    )
}
export default Video