import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function DocIcon(props) {
  const {isFocus} = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      {...props}>
      <Path d="M0 0h24v24H0V0z" fill="none" />
      {isFocus && (
        <Path
          d="M13 4H6v16h12V9h-5V4zm3 14H8v-2h8v2zm0-6v2H8v-2h8z"
          opacity={0.3}
        />
      )}

      <Path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
    </Svg>
  );
}

export default DocIcon;
