import React from 'react'
import RefreshIcon from '@material-ui/icons/Refresh';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddAlarmIcon from '@material-ui/icons/AddAlarm';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AccoutCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';

import './CardButtons.css';

function CardButtons() {
    return (
        <div className="button-group">
            <IconButton>
            <RefreshIcon fontSize = "large" className="first"/>
            </IconButton>
            <IconButton>
            <FavoriteIcon fontSize = "large" className="second"/>
            </IconButton>
            <IconButton>
            <AddAlarmIcon fontSize = "large" className="third"/>
            </IconButton>
            <IconButton>
            <AccessTimeIcon fontSize = "large" className="fourth"/>
            </IconButton>
            <IconButton>
            <AccoutCircleIcon fontSize = "large" className="fifth"/>
            </IconButton>
        </div>
    )
}

export default CardButtons
