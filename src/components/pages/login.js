import React, {Component} from 'react';

class Login extends Component {
    Login=()=>{
        sessionStorage.setItem("userName","Safwan");
    }
    render() {
        return (
            <div>
                <button onClick={this.Login}>LogIn</button>
            </div>
        );
    }
}

export default Login;