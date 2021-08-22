import React from 'react'
import './header.css'
import '../img/header-logo.svg'

let header = ({black})=>{
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/640px-Logonetflix.png' alt = "logo"/>
            </div>
            <div className="header--user">
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/640px-Netflix-avatar.png' alt = "user"/>
            </div>
        </header>
    )
}

export default header