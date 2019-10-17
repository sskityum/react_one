import React, { Component } from 'react'

export default class InputComponent extends Component{
    render(){
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.labelText}</label>
                <input type="text" id={this.props.id} placeholder={this.props.placeholder} />
            </div>
        )
    }
}