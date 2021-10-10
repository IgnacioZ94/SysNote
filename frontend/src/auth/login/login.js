import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div className='fromSend'>
                <form action='#'>
                    <div className='formGroup'>
                    <input type='text' id='username' name='username' className='formControl' placeholder='Username' />
                    </div>
                    <div className='formGroup'>
                        <input type='password' id='password' name='password' className='formControl' placeholder='Password' />
                    </div>
                    <button className='buttonSend'>LogIn</button>
                </form>
            </div>
        )
    }
}//<Link to='/auth'>Sing Up</Link>

const loginComponent = connect()(Login);
export { loginComponent , Login }