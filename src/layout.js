import React from 'react';
import pickBy from 'lodash/fp/pickby';

/* Compose style object from props */
function composeStyle({style, ...otherProps}) {
  const bodyStyle = document.body.style;
  return {
    ...pickBy((v, k) => bodyStyle.hasOwnProperty(k), otherProps),
    ...style
  };
}

export const Box = ({
  element: Element = 'div',
  children,
  ...otherProps
}) => (
  <Element {...otherProps} style={composeStyle(otherProps)}>
    {children}
  </Element>
);

export const Text = ({element: Element = 'span', children, ...otherProps }) => (
  <Element {...otherProps} style={composeStyle(otherProps)}>
    {children}
  </Element>
);

export const Image = ({...otherProps }) => (
  <img {...otherProps} style={composeStyle(otherProps)} />
);

export const Link = ({children, ...otherProps}) => (
  <a {...otherProps} style={composeStyle(otherProps)}>{children}</a>
);
