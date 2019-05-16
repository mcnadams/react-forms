import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

function Colors({ colors }) {
  const colorList = colors.map(color => {
    return (
      <li key='color.name'>
        <Color name={color.name} hex={color.color} />
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
