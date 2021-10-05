import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontsize = "large"/>
            </IconButton>

            <img className="tinder-logo" src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg" alt="tinder-logo"/>

            <IconButton>
                <ForumIcon  fontsize = "large"/>
            </IconButton>
        </div>
    )
}

export default Header;
