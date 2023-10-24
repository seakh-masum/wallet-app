/* eslint-disable prettier/prettier */
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ArrowBackIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height="32px"
      viewBox="0 0 24 24"
      width="32px"
      {...props}>
      <Path d="M0 0h24v24H0V0z" fill="none" opacity={0.87} />
      <Path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z" />
    </Svg>
  );
}

export default ArrowBackIcon;
