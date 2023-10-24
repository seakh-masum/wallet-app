/* eslint-disable prettier/prettier */
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function MasterCardIcon(props) {
  return (
    <Svg
      width={51}
      height={30}
      viewBox="0 0 256 159"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M93.298 16.903h69.15v124.251h-69.15V16.903z" fill="#FF5F00" />
      <Path
        d="M97.689 79.029c0-25.245 11.854-47.637 30.074-62.126C114.373 6.366 97.47 0 79.03 0 35.343 0 0 35.343 0 79.029c0 43.685 35.343 79.029 79.029 79.029 18.44 0 35.343-6.366 48.734-16.904-18.22-14.269-30.074-36.88-30.074-62.125z"
        fill="#EB001B"
      />
      <Path
        d="M255.746 79.029c0 43.685-35.343 79.029-79.029 79.029-18.44 0-35.343-6.366-48.734-16.904 18.44-14.488 30.075-36.88 30.075-62.125 0-25.245-11.855-47.637-30.075-62.126C141.373 6.366 158.277 0 176.717 0c43.686 0 79.029 35.563 79.029 79.029z"
        fill="#F79E1B"
      />
    </Svg>
  );
}

export default MasterCardIcon;
