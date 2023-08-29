import styles from './Img_TitleInfo.module.css'
import {useState} from "react";
import * as url from "url";

function TitleInfo({info, BGthemes, BGthemesEl, BGthemesElText}){
    const [BD, SetBd] = useState(info)
    console.log(info)
    return(
        <>
            <div className={styles.item} style={{backgroundColor:`${BGthemes}`}}>
                <div className={styles.Childitem} style={{backgroundColor:`${BGthemesEl}`}}>
                    <div className={styles.Childitem__Img}>
                        <div style={{backgroundImage: `url(${info.image})`}}></div>
                        <a href="#">Смотреть онлайн</a>
                    </div>
                    <div className={styles.Childitem__InfoTitles}>
                        <div className={styles.Childitem__TitleName}>
                            <h1 style={{color:`${BGthemesElText}`}}>{info.title}</h1>
                        </div>
                        <div className={styles.GenresList}>
                            {
                                info.genres?
                                info.genres.map(ins =>(
                                    <a href="#">{ins}</a>
                                )): null
                            }
                        </div>
                        <div className={styles.SubInfo}>
                            <p>Количество серий: <b className={styles.eyesViev}>{
                                info.series?  info.series : 'неизвестно'
                            }</b></p>
                        </div>
                        <div className={styles.SubInfo}>
                            <p>Рейтинг: <b className={styles.eyesViev}>{info.rating}</b></p>
                        </div>
                        <div className={styles.SubInfo}>
                            <p>Год выпуска: <b className={styles.eyesViev}>{info.year}</b></p>
                        </div>
                        <div className={styles.studios}>
                            <p>Студии:</p>
                        </div>
                        <div className={styles.studios__Img}>

                            <a href="#"><div className={styles.studios__LOGO_IMG} style={{backgroundImage: `url(../J.C.Staff_logo.jpg)`}}></div></a>
                            <a href="#"><div className={styles.studios__LOGO_IMG} style={{backgroundImage: `url(../Trigger_logo.png)`}}></div></a>

                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}
export default TitleInfo;