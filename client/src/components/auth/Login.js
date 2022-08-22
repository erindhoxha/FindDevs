import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { login } from '../../actions/auth';
import { connect } from 'react-redux';
import Alert from '../layout/Alert';

const Login = ({ login }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault();
          // It's passing the data
          const newUser = {
              email,
              password,
          }
          login(email, password);
    }

    return (
        <Fragment>
            <Alert />
            <h1 className="large text-primary">Sign in</h1>
            <p className="lead"><i className="fas fa-user"></i> Log in to your account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        name="email"
                        value={email} 
                        onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    minLength="6"
                    value={password} 
                    onChange={e => onChange(e)} 
                />
                </div>
                <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p className="my-1">
                Don't have an account? <Link to="/register">Register</Link>
            </p>
        </Fragment>
    )
}

export default connect(null, { login })(Login);