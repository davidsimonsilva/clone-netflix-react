import React from 'react';
import './header.css';

export default function HeaderBar ({black})  {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="#/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/375px-Netflix_2015_logo.svg.png" alt="Logo NSetflix"></img>
                </a>
            </div>
            <div className="header--user">
                <a href="#/">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt="Usuário" />
                </a>
            </div>
        </header>
    )
}