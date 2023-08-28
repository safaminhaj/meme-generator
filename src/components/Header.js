import React from 'react'
import Logo from '../assets/troll_face_logo.png'
import './Header.css'

export const Header = () => {
    return (
        <header>
            <img src={Logo} alt="logo" className='header-img' />
            <h1 className='header-heading'>Meme Generator</h1>
            <p className='header-p'>React Course - Project 3</p>
        </header>
    )
}
