import React, { Component } from 'react'
import { getAllBikes } from '../fetch-utls.js'
import OneBike from './OneBike.js'

export default class ListPage extends Component {

state = {
    bikes: []
}

componentDidMount = async () => {
    const allBikes = await getAllBikes()
    this.setState({bikes: allBikes})
}

    render() {
        return (
            <ul>
                {this.state.bikes.map((bike) => {
                    return (
                        <li key={bike.id}>
                        <OneBike 
                        {...bike}
                        />
                        </li>
                    )})}
            </ul>
        )
    }
}
