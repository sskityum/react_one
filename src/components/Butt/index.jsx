import  React, { Component } from 'react';

export default class Butt extends Component{
    render(){
        return (
            <button>{this.props.btnText}</button>
        )
    }
}
