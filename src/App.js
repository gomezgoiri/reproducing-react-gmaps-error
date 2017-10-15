import React, { Component } from 'react'

import { LocationViewer } from './Location'
import './App.css'

const getLocation = () => ({
  lng: -2.935013 + (Math.random() * 0.03),
  lat: 43.262985 + (Math.random() * 0.03)
})

class App extends Component {

  constructor() {
    super()
    this.state = {
      updater: null,
      position: { lng: -2.935013, lat: 43.262985 }
    }
  }

  componentDidMount() {
    const updater = setInterval(() => {
      this.setState({
        position: getLocation()
      })
    }, 100)
    this.setState({ updater })
  }

  componentWillUnmount() {
    if (this.state.updater !== null) {
      clearInterval(this.state.updater)
    }
  }

  render() {
    return (
      <div className='App'>
        <p className='App-intro'>
          Sample app used to isolate the react-google-maps error.
        </p>
        <LocationViewer
          marker={{ position: this.state.position }}
        />
      </div>
    )
  }
}

export default App
