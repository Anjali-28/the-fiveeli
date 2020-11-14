import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Typography } from "@material-ui/core"
import IconButton from "@material-ui/core/IconButton"
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import './Header.css'

const Header = ({ backbutton }) => {

    const history = useHistory();

    return (
        <div>
            {backbutton ?  (
                <div className="header">

                <IconButton onClick={() => history.replace(backbutton)}>
                    <ArrowBackIosIcon className="header_icon" fontSize="large"/>
                </IconButton>
                <Link to="/" className="a">
                    <Typography variant="h2">
                        A
                    </Typography>
                </Link>

                </div>
            ) : (
                <div className="header">
                <Link to="/" className="a">
                    <Typography variant="h2">
                        A
                    </Typography>
                </Link>
            
                <Link to="/ask">
                    <IconButton>
                        <QuestionAnswerIcon className="header_icon" fontSize="large"/>
                    </IconButton>
                </Link>
            </div>
            )}

        </div>
    )
}

export default Header
