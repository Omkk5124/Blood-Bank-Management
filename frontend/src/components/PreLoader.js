import React from "react";

import {ReactComponent as ReactLogo} from '../loader.svg';

const Preloader = () => {
  return (
    <ReactLogo style={{position: 'absolute',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      margin: 'auto'}}/>
  );
};

export default Preloader;
