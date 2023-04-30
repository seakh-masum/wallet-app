/* eslint-disable prettier/prettier */
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function LoginIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={48}
      viewBox="0 96 960 960"
      width={48}
      {...props}>
      <Path d="M489 936v-60h291V276H489v-60h291q24 0 42 18t18 42v600q0 24-18 42t-42 18H489zm-78-185l-43-43 102-102H120v-60h348L366 444l43-43 176 176-174 174z" />
    </Svg>
  );
}

export default LoginIcon;
