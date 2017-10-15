import React from 'react'
import PropTypes from 'prop-types'
import { OverlayView } from 'react-google-maps'

/*
 * I have problems capturing click events on normal markers in several circumstances:
 *  a) Defining a label.
 *  b) Defining the marker with a Symbol.
 * To avoid this, I will use custom elements.
 */
const CustomOverlayMarker = ({
  mapLoaded = false,
  size = 35,
  position,
  label = '',
  onClick,
  children,
  ...other
}) => {
  if (!mapLoaded) return null

  return (
    <OverlayView
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      position={position}
      getPixelPositionOffset={() => ({ x: -size / 2, y: -size })}
    >
      <button>Fake button</button>
    </OverlayView>
  )
}

CustomOverlayMarker.propTypes = {
  size: PropTypes.number,
  label: PropTypes.string,
  position: PropTypes.object,
  isEnabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
}

export default CustomOverlayMarker
