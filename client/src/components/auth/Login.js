import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { login } from '../../actions/auth';
import { connect } from 'react-redux';
import Alert from '../layout/Alert';
import PropTypes from 'prop-types';


const Login = ({ login, isAuthenticated }) => {
    let navigate = useNavigate();
        
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {
        console.log(isAuthenticated);
        if (isAuthenticated) {
            return navigate("/", { replace: true })
        }
    }, [isAuthenticated, navigate])

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

    // Redirect if logged in


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

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state, prevState) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);