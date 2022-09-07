import React from 'react';
import './header.css';
import '../../App.css';
import MenuSite from './menu';
import '../../index.css';

const Header = () => {
  return (
    <>
    <header>
        <div className="container-relocation">
            <div className="header">
                <MenuSite />
    <div></div>
            </div> 
        </div> 
    </header>

    </>
  )
}

export default Header;

