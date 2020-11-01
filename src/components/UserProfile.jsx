import React from 'react'

import { connect } from 'react-redux'
import Gravatar from '../components/Gravatar'

import UserImage from '../Assets/ProfileDefaultImage.png'
import '../styles/componentsStyles/UserProfile.scss'



const UserProfile = ({ UserName }, props) => {
  const { user } = props
  const hashUser = Object.keys(user).length > 0
  return (
    <section className="UserProfile__section">
      {hashUser ?
        <img src={Gravatar(user.email)} alt={user.email} /> :
        <img src={UserImage} alt=""/>
      }
      <p>AF Shichan {UserName}</p>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(UserProfile)