import React from 'react';
import './MainNavigation.css';
import { NavLink } from 'react-router-dom';
//import { header } from 'express-validator';


class MainNavigation extends React.Component {
    render() {
        return (
            <header className="main-navigation">
                <div className="main-navigation__logo">
                    <h1>eBizTracker</h1>
                </div>
                <nav className="main-navigation__items">
                    <ul>
                        <li>
                            <NavLink to="/products">Product</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default MainNavigation;