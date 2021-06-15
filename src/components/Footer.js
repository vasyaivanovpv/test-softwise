import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => {
  const { todosCount } = props;
  return (
    <footer className="footer">
      <span className="todo-count">
        Всего: <strong>{todosCount || 0}</strong>
      </span>
    </footer>
  );
};

Footer.propTypes = {
  todosCount: PropTypes.number.isRequired,
};

export default Footer;
