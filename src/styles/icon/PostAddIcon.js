import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PostAddIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      {...props}
    >
      <Path fill="none" d="M0 0H24V24H0z" />
      <Path d="M17 19.22H5V7h7V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2v7.22z" />
      <Path d="M19 2h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V7h3V5h-3V2z" />
      <Path d="M7 9H15V11H7z" />
      <Path d="M7 12L7 14 15 14 15 12 12 12z" />
      <Path d="M7 15H15V17H7z" />
    </Svg>
  )
}

export default PostAddIcon