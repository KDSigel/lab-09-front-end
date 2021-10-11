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

    handleUpload = () => {

        let options = {
          cloud_name: 'dgx9hagkn', 
          upload_preset: 'superGreatUpload',
          multiple: false,
          // cropping: true,
          resource_type: 'image'
        };
    
        window.cloudinary.openUploadWidget(options, (error, result) => { 
          if (error) {
            console.error(error);
            return;
          }
          
          const image = result[0];
          this.setState({ img: image.url }); // or you can store publicId for easier transformations
        });
    }


    render() {
        return (
            <div className='forms-elements'>
                <form onSubmit={this.handleSubmit}>
                <label>Year <input value={this.state.year} type='number' min='1800' max='2050' name='year' onChange={(e) => this.setState({ year: Number(e.target.value) })} required /></label>
                <label>Make <input value={this.state.make} type='text' name='make' onChange={(e) => this.setState({ make: e.target.value })} required /></label>
                <label>Model <input value={this.state.model} type='text' name='model' onChange={(e) => this.setState({ model: e.target.value })} required /></label>
                <label>Color <input value={this.state.color} type='text' name='color' onChange={(e) => this.setState({ color: e.target.value })} required /></label>
                {/* <label>Image (url) <input value={this.state.img} type='url' accept='image/*' name='image' onChange={(e) => this.setState({ img: e.target.value })} required /></label> */}
                <label>Image:<button type='button' onClick={this.handleUpload}>Upload</button></label>
                
                <label><span>Type </span> 
                    <select value={this.state.type_id} onChange={(e) => this.setState({ type_id: Number(e.target.value) })}>
                    {this.state.types.map(type => 
                                <option key={`${type.id}`} value={type.id}>
                                    {type.type}
                                </option>)}
                    </select>
                </label>
                
                <label><span>Rideable condition? </span> 
                    <select value={this.state.rideable} onChange={(e) => this.setState({ rideable: e.target.value })}>
                        <option value={true}>YES</option>
                        <option value={false}>NO</option>
                    </select>
                </label>

                <button>submit</button>
                </form>
            </div>
        )
    }
}
