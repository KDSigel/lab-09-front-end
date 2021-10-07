import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <div className='navigation'>
                <NavLink activeClassName='active' exact to='/'>list page</NavLink>
                <NavLink activeClassName='active' exact to='/create'>create page</NavLink>
            </div>
        )
    }
}
