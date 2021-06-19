import React from 'react';
import PropTypes from 'prop-types';

function Link({ children, id, onClick, href }) {
  return (
    <a
      id={id}
      onClick={onClick}
      href={href}
    >
      {children}
    </a>
  );
}

Link.defaultProps = {
  id: null,
  onClick: null,
  href: undefined,
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
};

export default Link;