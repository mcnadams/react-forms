import React from 'react';
import PropTypes from 'prop-types';

function Color({ name, hex }) {

  const decimalFromHex = hexSlice => {
    return Number.parseInt(`0x${hexSlice}`, 16);
  };

  const rgb = {
    red: decimalFromHex(hex.slice(1, 3)),
    green: decimalFromHex(hex.slice(3, 5)),
    blue: decimalFromHex(hex.slice(5, 7))
  };

  return (
    <dl>
      <dt>Name:</dt>
      <dd>{name}</dd>

      <dt>Hex:</dt>
      <dd>{hex}</dd>

      <dt>RGB:</dt>
      <dd>Red: {rgb.red}</dd>
      <dd>Green: {rgb.green}</dd>
      <dd>Blue: {rgb.blue}</dd>      
    </dl>
  );

}

Color.propTypes = {
  name: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired
};

export default Color;
