import React, {Component} from 'react';
import Redirect, {Link} from "react-router-dom";

class Page2 extends Component {
    constructor() {
        super();
        this.state={
            passData:"safwanhassan"
        }
    }
    render() {
        // var para="/page3/"+this.state.passData;

        if(sessionStorage.getItem("userName")==null){
            return <Redirect to="/login" />
        }
        else
        {
            return (
                <div>
                    <h1>Page2</h1>
                    {/*<button>*/}
                    {/*    <Link to={para}>Pass My Name</Link>*/}
                    {/*</button>*/}
                </div>
            );
        }

    }
}

export default Page2;