import React, { Component } from 'react'
import './FitImageS.css'

class FitImage extends Component {
  render() {
    return (
      <div className='fit-img'>
        <div className='heading'>
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>

        </div>

      </div>
    )
  }
}

export default FitImage