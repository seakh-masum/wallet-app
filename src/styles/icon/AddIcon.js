import * as React from "react"
import Svg, { Path } from "react-native-svg"

function AddIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      {...props}
    >
      <Path d="M0 0h24v24H0V0z" fill="none" />
      <Path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </Svg>
  )
}

export default AddIcon