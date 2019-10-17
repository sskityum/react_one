import React from 'react';
import ReactDOM from 'react-dom';


// import FormComponent from './components/FormComponent'
// import ContainerComponent from './components/ContainerComponent'
import CompFunc from './components/Comp'


ReactDOM.render(
    <div className="root">
        <CompFunc />
        <CompFunc />
        <CompFunc />
    </div>,
    document.getElementById('root')
)

