import React, { Component } from 'react'
import { createBike, getAllTypes } from '../fetch-utls.js'

export default class CreatePage extends Component {

state = {
    year: '',
    make: '',
    model: '',
    color: '',
    type_id: 1,
    img: '',
    rideable: true,
    owner_id: 1,
    types: []
}

componentDidMount = async () => {
    const types =  await getAllTypes()
    this.setState({ types });
}

handleSubmit = async e => {
    e.preventDefault();
    await createBike({...this.state, types: ''})
    this.props.history.push('/')
}


    render() {
        return (
            <div className='create-page-entries'>
                <form onSubmit={this.handleSubmit}>
                <label>year<input value={this.state.year} type='number' maxLength='4' name='year' onChange={(e) => this.setState({ year: Number(e.target.value) })} required /></label>
                <label>make<input value={this.state.make} type='text' name='make' onChange={(e) => this.setState({ make: e.target.value })} required /></label>
                <label>model<input value={this.state.model} type='text' name='model' onChange={(e) => this.setState({ model: e.target.value })} required /></label>
                <label>color<input value={this.state.color} type='text' name='color' onChange={(e) => this.setState({ color: e.target.value })} required /></label>
                <label>image<input value={this.state.img} type='url' accept='image/*' name='image' onChange={(e) => this.setState({ img: e.target.value })} required /></label>
                
                <label>type
                    <select value={this.state.type_id} onChange={(e) => this.setState({ type_id: Number(e.target.value) })}>
                    {this.state.types.map(type => 
                                <option key={`${type.id}`} value={type.id}>
                                    {type.type}
                                </option>)}
                    </select>
                </label>
                
                <label>rideable
                    <select value={this.state.rideable} onChange={(e) => this.setState({ rideable: Boolean(e.target.value) })}>
                        <option value={true}>yes</option>
                        <option value={false}>no</option>
                    </select>
                </label>

                <button>submit</button>
                </form>
            </div>
        )
    }
}
