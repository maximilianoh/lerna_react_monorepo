import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, id, onClick, type }) {
  return (
    <button
      id={id}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  id: null,
  onClick: null,
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
};

export default Button;