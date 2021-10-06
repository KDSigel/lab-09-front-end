import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class OneBike extends Component {
    render() {
        return (
            <>
            <Link to={`/karlsbikes/edit:${this.props.id}`}>
             <img src={this.props.img} alt={this.props.model}/>
             <h4>{this.props.year} {this.props.make} {this.props.model}</h4>
             <span className=''>Color: {this.props.color} /</span>
             <span className=''> Type: {this.props.type}</span>
             </Link>
        </>
        )
    }
}
