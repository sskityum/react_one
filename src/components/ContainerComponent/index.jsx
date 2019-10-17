import React from 'react'
import './style.css'

export default function ContainerComponent({obj}){
    return (
        <div className="container">
            <code>begin</code>
                {}
            <code>end;</code>
        </div>
    )
}