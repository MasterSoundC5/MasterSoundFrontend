import React from 'react'
import Bell from '../components/Icons/Bell'
import Radio from '../components/Icons/Radio'
import Tv from '../components/Icons/Tv'

import '../styles/componentsStyles/MenuBar.scss'

const MenuBar = () => {
  return (
    <nav class="nav-wrapper-flex">
		<input placeholder="Search your entertainment" />
		<i class="material-icons" id="mobile-menu">menu</i>
		<ul class="nav-links">
			<li><Tv /></li>
			<li><Radio /></li>
			<li><Bell /></li>
			<li>Pefil</li>
		</ul>
	</nav>
  )
}

export default MenuBar