/* eslint-disable prettier/prettier */
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function CreditCardIcon(props) {
    const {isFocus} = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      {...props}
    >
      <Path d="M0 0h24v24H0V0z" fill="none" />
      {isFocus && <Path d="M4 12h16v6H4zm0-6h16v2H4z" opacity={0.3} />}
      <Path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
    </Svg>
  );
}

export default CreditCardIcon;