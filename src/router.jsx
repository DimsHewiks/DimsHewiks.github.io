import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import App from './App.jsx'
import Login from './assets/elements/Login_Window/Login_Form.jsx'
import AnimePage from './assets/elements/animePage/animePage.jsx'
import Header from './assets/elements/header/header.jsx'
import Error from './assets/elements/Error404/Error.jsx'
import Footer from './assets/elements/footer/footer.jsx'
import Themes from './assets/elements/theme.json'
import {useEffect, useState} from "react";

function Routerss(){
    const [BGthemes, setBGThemes] = useState(Themes[0].BGColorDark)
    const [BGthemesEl, setBGThemesEl] = useState(Themes[0].BGColorElementDark)
    const [BGthemesElText, setBGThemesElText] = useState(Themes[0].BGColorElementDarkText)

    const [login, SetLogin] = useState(false)
    const [URL, SetURL] = useState(window.location.pathname)
    useEffect(() =>{
        URL === '/registration' ? SetLogin(true) : SetLogin(false)
    },[URL])


    return (
        <>
    <Router>
        <Header setBGThemes = {setBGThemes} setBGThemesEl={setBGThemesEl} setBGThemesElText={setBGThemesElText} BGthemes={BGthemes} BGthemesEl={BGthemesEl} BGthemesElText={BGthemesElText} login={login} URL={URL}/>
        <Routes>

            <Route path='/' element={<App  BGthemes={BGthemes} BGthemesEl={BGthemesEl} BGthemesElText={BGthemesElText} Login={login}/> }  />
            <Route path='/registration' element={<Login login={Login} SetLogin={SetLogin}/>}/>
            <Route path='anime/:AnimeID' element={<AnimePage BGthemes={BGthemes} BGthemesEl={BGthemesEl} BGthemesElText={BGthemesElText}/>} />
            <Route path='*' element ={<Error/>}  />
        </Routes>
        <Footer/>
    </Router>

        </>)
        

}
export default Routerss