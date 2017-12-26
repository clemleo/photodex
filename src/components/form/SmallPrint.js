import React from 'react';

export default function SmallPrint(props) {
  let smallPrintStyle = { fontSize: '0.8rem', margin: '0' };
  let { style, ...otherProps } = props;
  Object.assign(smallPrintStyle, style);
  return (
    <p style={smallPrintStyle} {...otherProps} />
  );
}
