import * as React from "react"
import Svg, { Path } from "react-native-svg"

function EditIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={24}
      viewBox="0 96 960 960"
      width={24}
      {...props}
    >
      <Path d="M180 876h44l443-443-44-44-443 443v44zm614-486L666 262l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42zm-42 42L248 936H120V808l504-504 128 128zm-107-21l-22-22 44 44-22-22z" />
    </Svg>
  )
}

export default EditIcon;