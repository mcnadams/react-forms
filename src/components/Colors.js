import React from 'react';
import Color from './Color';
import PropTypes from 'prop-types';

function Colors({ colors }) {
  const colorList = colors.map(color => {
    return (
      <li key='color.name'>
        <Color name={color.name} hex={color.hex} />
      </li>
    );
  });

  return (
    <ul>
      {colorList}
    </ul>
  );
  
}

Colors.propTypes = {
  colors: PropTypes.array.isRequired
};

export default Colors;
