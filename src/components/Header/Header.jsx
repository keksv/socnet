import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://w7.pngwing.com/pngs/482/944/png-transparent-peercoin-cryptocurrency-proof-of-stake-bitcoin-coin-text-trademark-logo.png' />

        <div className={s.loginBlock}>
            {props.isAuth? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
            : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;