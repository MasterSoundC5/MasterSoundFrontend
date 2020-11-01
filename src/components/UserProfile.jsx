import React from 'react'
import UserImage from '../Assets/RollingCover.jpeg'
import '../styles/componentsStyles/UserProfile.scss'


const UserProfile = ({ UserName }) => {
  return (
    <section className="UserProfile__section">
      <img src={UserImage} alt=""/>
      <p>AF Shichan {UserName}</p>
    </section>
  )
}

export default UserProfile