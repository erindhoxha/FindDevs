import PropTypes from 'prop-types'
import { useEffect } from 'react';
import { connect } from 'react-redux'
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ auth: { isAuthenticated, loading }, children }) => {
    let navigate = useNavigate();
    useEffect(() => {
        !isAuthenticated && navigate("/login", { replace: true })
    }, [isAuthenticated])

    return isAuthenticated && !loading ? children : navigate("/login", { replace: true });
};

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute)