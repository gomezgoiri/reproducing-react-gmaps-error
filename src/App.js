import React, { Component } from 'react'

import { LocationViewer } from './Location'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <p className='App-intro'>
          Sample app used to isolate the react-google-maps error.
        </p>
        <LocationViewer
          marker={{
            position: { lng: -2.935013, lat: 43.262985 }
          }}
        />
      </div>
    )
  }
}

export default App
