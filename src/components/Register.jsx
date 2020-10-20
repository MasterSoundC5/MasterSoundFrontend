import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import '../styles/Pages Styles/SignIn.scss'
import Logo from '../Assets/Icons/Logo Master Sound.png'


export default class Register extends Component {

    render() {
        return(
            <main className='mainSignIn'>
                <img src={Logo} alt='Logo' />
                <form className='mainSignIn__form'>
                    <label>Nombre de Usuario</label>
                    <input type='text' placeholder='Nombre de Usuario' name='username' />
                    <label>e-mail</label>
                    <input type='e-mail' placeholder='e-mail' name='e-mail' />
                    <label>Password</label>
                    <input type='password' placeholder='password' name='password' />
                    <label>Confirmar Password</label>
                    <input type='password' placeholder='password' name='password' />
                    <button className='mainSignIn__form--Register' type='button'>Crear Cuenta</button>
                </form>
            </main>
        )
    }
}