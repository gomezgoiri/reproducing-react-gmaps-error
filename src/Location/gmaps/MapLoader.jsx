import React from 'react'
import PropTypes from 'prop-types'

import { withScriptjs } from 'react-google-maps'

import EnhancedMap from './EnhancedMap'

const getGMapsAPIURL = () => {
  const hostname = 'maps.googleapis.com'
  const pathname = '/maps/api/js'
  const query = {
    v: '3',
    key: process.env.REACT_APP_GOOGLE_KEY
  }
  const ending = Object.keys(query).reduce((ret, k, i) => {
    const v = query[k]
    return ret + (i !== 0 ? '&' : '') + k + '=' + v
  }, '?')
  // 'https://maps.googleapis.com/maps/api/js?v=3.26&libraries=geometry,drawing,places&key=AIzaSyBVKhISdQ_5x6c26LkcrogEg-7jt0w4Zk8'
  // We could return the URL directly, but I kept this way
  // (1) to make it look like former r-g-m v4's ScriptjsLoader component and
  // (2) to stress the different fragments of the URL
   return 'https://' + hostname + pathname + ending
}

const AsyncGMap = withScriptjs(EnhancedMap)

const MapLoader = props => (
  <AsyncGMap
    googleMapURL={getGMapsAPIURL()}
    loadingElement={<p>Loading...</p>}
    { ...props }
  />
)

const WrappedMapLoader = ({ containerElement, children, ...other }) => (
  <MapLoader
    containerElement={containerElement}
    mapElement={
      <div style={{ height: `100%` }} />
    }
    { ...other }
  >
    { children }
  </MapLoader>
)

WrappedMapLoader.propsTypes = {
  containerElement: PropTypes.node.isRequired
}

export default WrappedMapLoader
