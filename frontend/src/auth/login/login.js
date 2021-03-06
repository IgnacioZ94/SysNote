import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {authActions} from '../../_action/auth.action';
//import {authReducer} from '../../_reducers/auth.reducer';


class Login extends Component {
    
    //constructor() {
    //    super();
    //    this.handler = this.handler.bind(this);
    //  }

    constructor(props) {
        super(props);

        this.onHandleSubmit = this.onHandleSubmit.bind(this);

        this.state = {
            alertUsername: false,
            alertPassword: false
        }
    }

    authUsername(username) {
        if(username === "") {
            this.setState({
                alertUsername: true
            });
            return false;
        }
        else {
            this.setState({
                alertUsername: false
            });
            return true;
        }
    }

    authPassword(password) {
        if(password === "") {
            this.setState({
                alertPassword: true
            });
            return false;
        }
        else {
            this.setState({
                alertPassword: false
            });
            return true;
        }
    }
    


    //
    //  handler(e){
    //    this.props.filterUser(e.target.value);
    //  }

    onHandleSubmit = e => {
        e.preventDefault();
        //const propss = this.props;
        if(this.authUsername(this.username.value))
            if(this.authPassword(this.password.value)){
                const userObjet = {
                    username: this.username.value,
                    password: this.password.value 
                }

                //console.log(userObjet); //Llega bien este objeto al log
                //Problema con el this.props
                this.props.login(userObjet);
                //intentosxD
                //this.props.authActions.login(userObjet);
                //authActions.login(userObjet);
            }
    }

    render() {
        const { authReducer } = this.props;

        return (
            <div className='fromSend'>
                <form action='#' onSubmit={this.onHandleSubmit}>
                    <div className='formGroup'>
                    <input type='text' id='username' ref={input => this.username = input} name='username' className='formControl' placeholder='Username' />
                    {this.state.alertUsername && <p>El usuario es requerido</p>}
                    </div>
                    <div className='formGroup'>
                        <input type='password' id='password' ref={input => this.password = input} name='password' className='formControl' placeholder='Password' />
                        {this.state.alertPassword && <p>La constrase??a es requerida</p>}
                    </div>
                    <button className='buttonSend'>LogIn</button>
                </form>
                {authReducer.loginRequest && <div className='loader_content'><div className='loader'></div> Loading </div>}
            </div>
        )
    }
}//<Link to='/auth'>Sing Up</Link>


function mapSateToProps(state) {
    const { authReducer } = state;
    return { authReducer }
}

const actionCreator = {
    login: authActions.login
}

const loginComponent = connect(mapSateToProps , actionCreator)(Login);
export { loginComponent as Login }