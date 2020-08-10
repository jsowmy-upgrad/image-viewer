import React, {Component} from 'react';
import './login.css';
import '../../commons/common.css';
import Header from '../../commons/common';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';

class login extends Component {
    constructor() {
        super();
        this.state = {
            value: 0,
            username: "",
            usernameRequired: "dispNone",
            password: "",
            passwordRequired: "dispNone",
            loggedIn: sessionStorage.getItem('access-token') == null ? false : true,
            invalidLogin: "dispNone"
        };
    }

    //method to capture user id keyed in
    inputUsernameEvent = (e) => {
        this.setState({username: e.target.value})
    }
   //method to capture password keyed in
    inputPasswordEvent = (e) => {
        this.setState({password: e.target.value})
    }

    //method to handle when the login button is clicked
    onClickSubmit = () => {

        this.state.username === "" ? this.setState({usernameRequired: "dispBlock"}) : this.setState({usernameRequired: "dispNone"});
        this.state.password === "" ? this.setState({passwordRequired: "dispBlock"}) : this.setState({passwordRequired: "dispNone"});

        if (this.state.username === "" || this.state.password === "") {
            return
        }



    let username = "admin";
    let password = "password@123";
    let accesstoken = "IGQVJXd0dKZA2JQX0pJV1RvT2VRR05JT0UxcGdhLUhyaHNyMkFRZA2NzVHRCd3ZAJSERVT0dMdjgtZAUQzOXJ3T1ZAKUFNiRTlzcXdzaFpVa0dHOERQVlNnemdDY2t0OVlpc2ZAVczNoWjZAUZAzdYZAFU4N2lYLQZDZD";
    
    if (this.state.username == username && this.state.password == password) {
        this.setState({invalidLogin: "dispNone"});
        sessionStorage.setItem('access-token', accesstoken);
    } else {
        this.setState({invalidLogin: "dispBlock"})
        sessionStorage.setItem('access-token', null);
    }
}
    
    render() {
        return (
            <div>
            <Header/>
            <div className="login-box">
                <div className="login">
                    <Card>
                        <CardContent>
                            <FormControl> <span className="title"> LOGIN </span> </FormControl> <br/>
                            
                            <p>
                            <FormControl required className="credentials">
                                <InputLabel htmlFor="credentials"> Username </InputLabel>
                                <Input id="credentials" type="text" username={this.state.username} onChange={this.inputUsernameEvent}/>
                                <FormHelperText className={this.state.usernameRequired}><span
                                    className="red">required</span></FormHelperText>
                            </FormControl>
                            </p>
                            
                            <p>
                            <FormControl required className="credentials">
                                <InputLabel htmlFor="credentials"> Password </InputLabel>
                                <Input id="credentials" type="password"  onChange={this.inputPasswordEvent}/> 
                                <FormHelperText className={this.state.passwordRequired}>
                                    <span className="red">required</span></FormHelperText>
                            </FormControl></p>
                            
                            <FormHelperText className={this.state.invalidLogin}>
                                <span className="red">Incorrect username and/or the password</span></FormHelperText>
                            <br/>
                            <Button variant="contained" color="primary" onClick={this.onClickSubmit}>LOGIN</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
        )
    }
}

export default login;