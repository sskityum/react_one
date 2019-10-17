import React, { Component } from 'react'
import './style.css'
import Butt from '../Butt'

// export default class Comp extends Component{
//     render(){
//         return (
//             <p> {} Привет, Реакт!</p>
//         )
//     }
// }

export default function CompFunc(){
    return (
        <div className="square">
            <Butt btnText="Click easy"/>
            <Butt btnText="Click harder"/>
            <p> Привет, React js!</p>
        </div>
        
    )
}