/* eslint-disable prettier/prettier */
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function BackspaceIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={48}
      viewBox="0 96 960 960"
      width={48}
      {...props}
    >
      <Path d="M448 730l112-112 112 112 43-43-113-111 111-111-43-43-110 112-112-112-43 43 113 111-113 111 43 43zM120 576l169-239q13-18 31-29.5t40-11.5h420q24.75 0 42.375 17.625T840 356v440q0 24.75-17.625 42.375T780 856H360q-22 0-40-11.5T289 815L120 576zm75 0l154 220h431V356H349L195 576zm585 0V356v440-220z" />
    </Svg>
  );
}

export default BackspaceIcon;
