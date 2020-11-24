import React, {Component} from 'react';
import Redirect, {Route} from "react-router-dom";

class Page3 extends Component {
    constructor({match}) {
        super();
        this.state={
            myname:match.params.username
        }

    }
    render() {
        if(sessionStorage.getItem("userName")==null){
            return <Redirect to="/login" />
        }
        else
        {
            return (
                <div>
                    <h1>Page3</h1>
                    <p>{this.state.myname}</p>
                </div>
            );
        }
    }
}

export default Page3;