import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { getCurrentProfile } from '../../actions/profile'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'

function Dashboard( { getCurrentProfile, auth, profile }) {

  useEffect(() => {
    getCurrentProfile();
  }, [])

  return (
  <div>
    Dashboard
    {profile.loading && profile.profile === null ? <Spinner /> : <></>}
  </div>
  )
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = (state, prevState) => ({
  auth: state.auth,
  profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard)
