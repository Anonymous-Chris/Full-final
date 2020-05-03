import React, { Component } from 'react'

export class update extends Component {

    addnewData(newData){
        console.log(newData)
    }

    onSubmit(e){
      
        const newData={
            name:this.refs.name.value,
            city:this.refs.city.value,
            address:this.refs.address.value
        }
        this.addnewData(newData)
        e.preventDefault()
    }


    render() {
        return (
            <div>
                <br/>
                <form onSubmit={this.onSubmit.bind(this)}>

                <div className="input-field">
                <input type="text" name="name" ref="name"/>
                <label htmlFor="name">Name</label>
                </div>

                <div className="input-field">
                <input type="text" name="city" ref="city"/>
                <label htmlFor="city">City</label>
                </div>

                <div className="input-field">
                <input type="text" name="address" ref="address"/>
                <label htmlFor="address">Address</label>
                </div>
                <input type="submit" value="save" className="btn"/>
                </form>
            </div>
        )
    }
}

export default update
