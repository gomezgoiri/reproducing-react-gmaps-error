import React from 'react'
import PropTypes from 'prop-types'

import { withGoogleMap, GoogleMap } from 'react-google-maps'

// https://github.com/tomchentw/react-google-maps/issues/482
class EnhancedMap extends React.Component {

  constructor () {
    super()
    this.state = {
      loaded: false
    }
  }

  componentDidMount () {
    this.setState({ loaded: true })
  }

  _handleZoomChanged = () => {
    if (this.props.onZoomChanged) {
      const newZoomLevel = this.me.getZoom()
      this.props.onZoomChanged(newZoomLevel)
    }
  }

  _handleCenterChanged = () => {
    if (this.props.onCenterChanged) {
      const newCenter = this.me.getCenter()
      this.props.onCenterChanged({
        lat: newCenter.lat(),
        lng: newCenter.lng()
      })
    }
  }

  render () {
    if (!this.state.loaded) {
      return null
    }

    const { children, ...restProps } = this.props
    // Used in other functions in this component:
    delete restProps.onZoomChanged
    delete restProps.onCenterChanged
    return (
      <GoogleMap
        ref={self => {this.me = self}}
        onZoomChanged={this._handleZoomChanged}
        onCenterChanged={this._handleCenterChanged}
        options={{
          keyboardShortcuts: false,
          mapTypeControl: false,
          streetViewControl: false,
          minZoom: 2,
          maxZoom: 16
        }}
        { ...restProps }
      >
        {
          React.Children.map(children,
            c => React.cloneElement(c, { mapLoaded: true })
          )
        }
      </GoogleMap>
    )
  }
}

EnhancedMap.propsTypes = {
  onZoomChanged: PropTypes.func,
  onCenterChanged: PropTypes.func
}

export default withGoogleMap(EnhancedMap)
