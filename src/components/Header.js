import React from 'react';
import Link from './Link';

const Header = () => {
    return (
    <div className="ui menu">
        <div className="header item">Sky Cloud Apps</div>
        <Link href="/" className="item">Home</Link>
        <Link href="/faq" className="item">FAQ</Link>
        <Link href="/list" className="item">Article Search</Link>
        <Link href="/dropdown" className="item">Secret Settings</Link>
        <Link href="/translate" className="item">Translate</Link>
        <Link href="/uses" className="item">Uses</Link>
    </div>)
}

export default Header;