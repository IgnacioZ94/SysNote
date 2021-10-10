import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

class Register extends Component {
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
                    <div className='formGroup'>
                        <input type='password' id='confirmPassword' name='confirmPassword' className='formControl' placeholder='Confirm Password' />
                    </div>
                    <button className='buttonSend'>Register</button>
                </form>
            </div>
        )
    }
}//<Link to='/singin'>Cancel</Link>

const registerComponent = connect()(Register);
export { registerComponent , Register }