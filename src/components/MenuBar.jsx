import React from 'react'
import Bell from '../components/Icons/Bell'
import Radio from '../components/Icons/Radio'
import Tv from '../components/Icons/Tv'


import '../styles/componentsStyles/MenuBar.scss'

const MenuBar = () => {
  return (
	<nav class="nav-wrapper-flex">
		<input type="text" placeholder="Search your entertainment"></input>
		<ul class="nav-links">
			<li><a href="#"><Tv /></a></li>
			<li><a href="#"><Radio /></a></li>
			<li><a href="#"><Bell /></a></li>
			<li><a href="#">Profile</a></li>
		</ul>
	</nav>
  )
}

export default MenuBar