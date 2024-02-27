import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

import { IoClose, IoMenu } from "react-icons/io5";


export interface NavItem {
    to: string,
    title: string
}

export const navItems: NavItem[] = [
    {
        to: '/',
        title: 'Home'
    },
    {
        to: '/about-us',
        title: 'About Us'
    },
    {
        to: '/news',
        title: 'News'
    },
    {
        to: '/favorite',
        title: 'Favorite'
    },
    {
        to: '/Location',
        title: 'Location'
    },
    {
        to: '/get-started',
        title: 'Get Started'
    },
]

const NavBar = ()=>{
    return (
        <header className='header'>
            <nav className='nav container'>
                <NavLink to='/' className={'nav-logo'}>
                    Navigation Bar
                </NavLink>
                <div className='nav-menu'>
                    <ul className='nav-list'>
                        {navItems.map((item)=>{
                            let className: string = '';
                            if(item.title.includes('Get Started')){
                                className = 'nav-cta'
                            }
                            return <li className='nav-item'>
                                <NavLink to={item.to} className={`nav-link ${className}`}>
                                    {item.title}
                                </NavLink>
                            </li>
                        })}
                    </ul>
                    <div className="nav-close">
                        <IoClose />
                    </div>
                </div>
                <div className="nav-toggle">
                    <IoMenu />
                </div>
            </nav>
        </header>
    )
}

export {NavBar}