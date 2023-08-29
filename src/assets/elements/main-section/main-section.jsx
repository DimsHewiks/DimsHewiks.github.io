import styles from './main-section.module.css'
import { useState } from 'react'
import Carusel from './carusel/carusel.jsx'
import TopAnimeCarusel from './TopAnimeCarusel/TopAnimeCarusel.jsx'
import OngoingList from './ongoingList/OngoingList.jsx'
import GenresList from './genresList/GenresList.jsx'
import WebInfo from './web-info/webInfo.jsx'

import Themes from ".././theme.json"

function mainSection({BGthemes, BGthemesEl, BGthemesElText}) {

 
    const [filteredNews, setFilteredNews] = useState('');
    const [value, setValue] = useState('');
    const [anime, setAnime] = useState('');
    

    return(
        <>
             
            <Carusel BGthemes={BGthemes} BGthemesEl={BGthemesEl}/>   
            <TopAnimeCarusel BGthemes={BGthemes} BGthemesEl={BGthemesEl} BGthemesElText={BGthemesElText} />
            <OngoingList BGthemes={BGthemes} BGthemesEl={BGthemesEl} BGthemesElText={BGthemesElText}/>
            <GenresList BGthemes={BGthemes} BGthemesEl={BGthemesEl} BGthemesElText={BGthemesElText} />
            <WebInfo BGthemes={BGthemes} BGthemesEl={BGthemesEl} BGthemesElText={BGthemesElText}/>
            
           
        </>
    )

}
export default mainSection;