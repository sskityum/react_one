import  React, { Component } from 'react';
import InputComponent from '../InputComponent'


export default class FormComponent extends Component{
    render(){
        return (
            <div>
                <h1>Hello, my first component!</h1>
                <form>
                    <InputComponent 
                        id="name" 
                        labelText="Name:"
                        placeholder="your name"
                    />
                    <InputComponent
                        id="email"
                        labelText="Email:"
                        placeholder="your email"
                    />                
                </form>
            </div>
        )
    }
}