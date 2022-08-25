import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth'

const Navbar = (props) => {
  useEffect(() => {
    console.log(props);
  }, [props])
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/"><i className="fas fa-code"></i> DevConnector</Link>
      </h1>
      <ul>
        <li><Link to="/developers">Developers</Link></li>
        {!props.auth.isAuthenticated ? <li><Link to="/register">Register</Link></li> : ''}
        {!props.auth.isAuthenticated ? <li><Link to="/login">Login</Link></li> : <li onClick={() => props.logout()}><>Logout</></li>}
      </ul>
    </nav>
  )
}


Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state, prevState) => ({
  auth: state.auth
})


export default connect(mapStateToProps, { logout })(Navbar)