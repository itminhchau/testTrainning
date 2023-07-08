import React from 'react';
import './style.scss'

Header.propTypes = {

};

function Header(props) {
    return (
        <div className='container'>
            <div className='header'>
                <h1>Wellcome to Tranning ReactJs</h1>
            </div>
        </div>
    );
}

export default Header;