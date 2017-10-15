import React from 'react'
import PropTypes from 'prop-types'
import { Map, Marker } from './gmaps'

const LocationViewer = ({ marker, defaultZoom = 10, size = 45 }) => (
  <Map
    containerElement={
      <div
        style={{
          height: '100%',
          width: '100%'
        }}
      />
    }
    defaultCenter={marker.position}
    defaultZoom={defaultZoom}
  >
    <Marker
      position={marker.position}
      label={marker.title}
      status={marker.status}
      size={size}
    />
  </Map>
)

LocationViewer.propTypes = {
  marker: PropTypes.shape({
    position: PropTypes.shape({
      lng: PropTypes.number,
      lat: PropTypes.number
    }),
    label: PropTypes.string,
    status: PropTypes.string
  })
}

export default LocationViewer
