import React, { useState } from 'react'
import Insta from '../images/instagram.png'
import { autorize } from '../reducers/user/autorization/autorizationAction'
import {Link} from 'react-router-dom'
import { useAppDispatch } from '../hooks/hook'

const Autorize: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useAppDispatch()
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
       
    }
    const passHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
         setPassword(event.target.value)
    }
    const handleClick = () => {
        dispatch(autorize({username, password}))
    }
    
    return (
        <div className="autorize-wrapper">
            <img src={Insta} alt="error" />
            <form action='URL'>
                <input onChange={handleChange} value={username} type="text" name='login' placeholder='Телефон, имя пользователя или эл.адрес'/>
                <input onChange={passHandleChange} value={password} type="current-password" name='password' placeholder='Пароль'/>
            </form>
           <Link to='/home'><button onClick={handleClick}>Войти</button></Link>
        </div>
    )
}

export default Autorize