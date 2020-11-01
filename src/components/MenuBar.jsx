import React from 'react'
import Bell from '../components/Icons/Bell'
import Radio from '../components/Icons/Radio'
import Tv from '../components/Icons/Tv'

import SearchFilter from '../components/SearchFilter'


import '../styles/componentsStyles/MenuBar.scss'
import UserProfile from './UserProfile'

const MenuBar = () => {
  return (
	<nav className="nav-wrapper-flex">
		<SearchFilter />
		<ul className="nav-links">
			<li className="Tv__nav"><a href="/"><Tv /></a></li>
			<li><a href="/"><Radio /></a></li>
			<li><a href="/"><Bell /></a></li>
		</ul>
		<div className="nav-profile"><UserProfile /></div>
	</nav>
  )
}

export default MenuBar