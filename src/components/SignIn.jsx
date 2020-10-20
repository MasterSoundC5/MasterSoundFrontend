import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import '../styles/Pages Styles/SignIn.scss'
import Logo from '../Assets/Icons/Logo Master Sound.png'


export default class SignIn extends Component {

    render() {
        return(
            <main className='mainSignIn'>
                <img src={Logo} alt='Logo' />
                <form className='mainSignIn__form'>
                    <label>e-mail</label>
                    <input type='email' placeholder='email' name='email' />

                    <label>Password</label>
                    <input type='password' placeholder='password' name='password' />
                    <div className="theme-switch-wrapper">
                        <p>Mantener la sesion abierta</p>
                        <label className="theme-switch">
                        <input type="checkbox" id="checkbox" />
                            <div className="slider round"></div>
                        </label>
                    </div> 
                    <button className='mainSignIn__form--signIn' type='button'>Login</button>
                    <section className='mainSignIn__form--link'>
                        <Link to='/'>Olvide mi contraseña</Link>
                        <Link to='/'>Crear una cuenta</Link>
                    </section>
                </form>
            </main>
        )
    }
}