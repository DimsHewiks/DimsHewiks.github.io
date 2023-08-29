import styles from './Login.module.css';
import {useEffect, useState} from "react";



export default function Login({login, SetLogin}){




    const [URL, SetURL] = useState(window.location.pathname)

    const [UserLogin, SetUserLogin] = useState('')
    const [Password, SetPassword] = useState('')
    const [RePassword, SetRePassword] = useState('')
    const [NickName, SetNickName] = useState('')
    const [Status, SetStatus] = useState('')




    const [UserData, setUserData] = useState({ //Информация о пользователе
        User_Login:'',
        Password : '',
        RePassword: '',
        NickName: '',
        Status: ''
    });

     function AlertData () { //Функция добавление данных в состояние
       setUserData({
            User_Login:UserLogin,
            Password : Password,
            RePassword: RePassword,
            NickName: NickName,
            Status: Status
        })

    }
    useEffect(()=>{
        console.log(UserData)
    }, [UserData])








    const [data, setdata] = useState([])
    useEffect(()=>{
        async function fetchdata(){
            const client = await MongoClient.connect('mongodb://localhost:27017');
            const  db = client.db('Hikky');
            const collection = db.collection('users');
            const result = await collection.find().toArray();
            setdata(result);
        }
        fetchdata()
    },[])





    return(

        <div className={styles.Item}>

            <form className={styles.Login__Form} >
                <div>
                    <div className={styles.header}>
                        <h2>Регистрация</h2>
                    </div>
                    <div className={styles.MainBody}>

                        <div className={styles.Input}>
                            <p>Введите логин:</p>
                            <input type='text' onChange={e =>
                                SetUserLogin(e.target.value)}
                                value={UserLogin}
                            />
                        </div>
                        <div className={styles.Input}>
                            <p>Введите пароль:</p>
                            <input type='password' onChange={e =>
                                SetPassword(e.target.value)}
                                   value={Password}

                            />
                        </div>
                        <div className={styles.Input}>
                            <p>Подтвердите пароль:</p>
                            <input type='password' onChange={e =>
                                SetRePassword(e.target.value)}
                                   value={RePassword}

                            />
                        </div>
                        <div className={styles.Input}>
                            <p>Придумайте никнейм:</p>
                            <input type='text' onChange={e =>
                                SetNickName(e.target.value)}
                                   value={NickName}

                            />
                        </div>
                        <div className={styles.Input}>
                            <p>Немного о вас:</p>
                            <input type='text' onChange={e =>
                                SetStatus(e.target.value)}
                                   value={Status}

                            />
                        </div>

                    </div>
                    <div className={styles.Button}>
                        <input type='button' value='зарегистрироваться' onClick={AlertData}/>
                    </div>
                </div>
            </form>
        </div>
    )
}
