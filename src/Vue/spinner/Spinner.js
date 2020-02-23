import React from 'react'
import './spinner.css'
function Spinner(Component) {
  return function SpinnerComponent({ loading, ...props }) {
    if (loading) {
    return (<div className="sk-chase">
    <div className="sk-chase-dot"></div>
    <div className="sk-chase-dot"></div>
    <div className="sk-chase-dot"></div>
    <div className="sk-chase-dot"></div>
    <div className="sk-chase-dot"></div>
    <div className="sk-chase-dot"></div>
  </div>)
            }
            else
          
    return (<Component {...props} />)}}

    export default Spinner;