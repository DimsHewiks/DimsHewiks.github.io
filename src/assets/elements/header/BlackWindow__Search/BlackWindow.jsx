import styles from "./BlackWindow.module.css";
import AniBD from "../../main-section/amineList/listElement/animeBD.json"
import {useState} from "react";
import { Link, Outlet} from "react-router-dom";
function BlackWindow ({setSearch, BigSearch}){

    const [AnimeBD, SetAnimeBD] = useState(AniBD)
    const [value, Setvalue] = useState('')
    const filter = AnimeBD.filter(filter=>{
        return filter.title.toLowerCase().includes(value.toLowerCase())
    })

    function exitSearch (){
        setSearch(!BigSearch);
    }

 return(
     <>
         <div className={styles.BlackWindow__Search} style={{display: 'block'}}>
             <div className={styles.item}>

                 <div className={styles.ButtonExit}>
                    <div onClick={exitSearch}> </div>
                 </div>
                  <div className={styles.MainSearch}>
                      <input placeholder="Введите название аниме..." onChange={e => Setvalue(e.target.value)} value={value}/>
                  </div>
                 <div className={styles.Kolvo}>
                     {value.length > 1? <p>Количество по поиску: {filter.length}</p> : null}
                </div>

                 <div className={styles.BlackWindow__Content}>


                     {value.length >1 ? filter.map(base =>(
                         <Link to={`/anime/${base.id}`} onClick={exitSearch}>
                             <div className={styles.Content_Card} style={{backgroundImage: `url(${base.image})`}}>
                                 <div className={styles.raiting}>
                                     <div>
                                         <p>4.5</p>
                                     </div>
                                 </div>
                                 <div className={styles.Card__Content}>
                                     <div className={styles.Card__Name}>
                                         <h3>{base.title}</h3>
                                     </div>
                                     <div></div>
                                 </div>
                             </div>
                         </Link>
                     )): null}
                     <Outlet />
                 </div>


             </div>
         </div>
     </>
 )
}
export default  BlackWindow;