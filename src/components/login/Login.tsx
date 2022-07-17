import './login.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { login } from '../../store/user/userSlice';
import LoginWith from '../common/loginWith/LoginWith';

import { useState } from 'react';

export default () => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    const {error} = useAppSelector(state => state.user);

    const dispatch = useAppDispatch();

    const actionLogin = () => {
        dispatch(login({name:name, pass:pass}))
    }

    document.addEventListener('keypress', (e)=>{
        if (e.key == 'Enter') {
            actionLogin()
        }
    })


    return (
        <div className='login_wrapper'>
            (user: jorge, pass: 1234 🤐)
            <h2 className='login_title'>Welcome to CLEVERPY Blog</h2>
            <div className='login_continue'>
                <LoginWith color='#2F3AB2' name='Google' icon='bi bi-google' />
                <LoginWith color='#0096F2' name='Twitter' icon='bi bi-twitter' />
                <LoginWith color='#000000' name='GitHub' icon='bi bi-github' />
            </div>
            <form className='login_form' action="">
                {error.length!=0 && <p>{error}</p>}
                <div className='login_form-label'>
                    <p>User</p>
                    <input value={name} onChange={(e)=>setName(e.target.value)} className='login_from-input' id='email' name='email' type="text" />
                </div>
                <div className='login_form-label'>
                    <p>Password</p>
                    <input value={pass} onChange={(e)=>setPass(e.target.value)} className='login_from-input' id='pass' name='pass' type="password" />
                </div>
            </form>
            <button onClick={actionLogin} className='login-btn'>Continue</button>
        </div>
    )
}