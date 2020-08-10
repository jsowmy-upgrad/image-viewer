import React, {Component} from 'react';
import './common.css';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';


class Header extends Component {

    constructor() {
        super();
    }

    //method to open profile when avatar is clicked
    handleOpenAvatar = () => {
        this.setState({menuOpen: true})
    }

    //render the header for the login pages
    render() {
        return (
            <div className="flex-container header">
                <Link className="page-header" style={{textDecoration: 'none'}} to='/profile'>
                    <span class="page-title">Image Viewer </span>
                    <span class="avatar">
                        <IconButton id="profile-icon">
                            <Avatar src="../assets/web-spider-logo.jpg"  onClick={this.handleOpenAvatar}/>
                        </IconButton>
                    </span>
                </Link>
                    
            </div>
        )
    }
}

export default Header;