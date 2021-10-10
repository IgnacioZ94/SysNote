import React , { Component } from "react";
import { Register } from "./register";
import { Login } from "./login";
import { connect } from "react-redux";
import './auth.css'
class Auth extends Component {
    
    constructor(props) {

        super(props);

        this.state = {
            actualTap: "login"
        }
    }

    onHadleNavClick = (e) => {
        this.setState({
            actualTap: e.target.id
        });
    }
    //Forma de probar el buttonClick
    //onHadleNavClick = (e) => {
    //    console.log(e.target.id)
    //}

    render(){
        return (
            <div className='authContainer'>
                <div className='autenticationContainer'>
                    <div className='containerNavigations'>
                        <div 
                            className={this.state.actualTap === 'login' ? 'authTap tapActive' : 'authTap'} 
                            id='login' 
                            onClick={this.onHadleNavClick}>Login</div>
                        <div 
                        className={this.state.actualTap === 'register' ? 'authTap tapActive' : 'authTap'}
                        id='register' 
                        onClick={this.onHadleNavClick}>Registro</div>
                    </div>
                    <div className='containerFrom'>
                        {this.state.actualTap === 'login' && <Login />}
                        {this.state.actualTap === 'register' && <Register />}
                    </div>
                </div>
            </div>
        )
    }
}

const authComponent = connect()(Auth);
export {authComponent as Auth};