import React, {Component} from 'react';
import {Box} from './layout';

const styles = {
  root: {
    position: 'relative',
    zIndex: 2,
    transition: 'all 1s cubic-bezier(.75,.1,.1,1)',
    transformStyle: 'preserve-3d',
    transform: 'translateX(-1000px) rotate(30deg) translateY(1000px)',
    visibility: 'hidden'
  },
  animate: {
    transform: 'translateZ(0)',
    visibility: 'visible'
  }
};

const Animate = ({children, animate}) => {
  const style = Object.assign({},
    styles.root,
    animate && styles.animate
  );
  return <Box style={style}>{children}</Box>;
}

export default Animate;
