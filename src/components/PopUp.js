import React from 'react';
import PropTypes from 'prop-types';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const PopUp = (props) => {
  const { setMenu } = props;
  return (
    <div className="sideBar">
      <button type="button" className="closeIcon" onClick={() => setMenu(true)}>
        {' '}
        <GrClose />
      </button>
      <div className="about">
        <button type="button" className="links">
          {' '}
          <Link to="/" onClick={() => setMenu(true)}>
            home
          </Link>
          {' '}
          <br />
        </button>
        <button type="button" className="links">
          {' '}
          <Link to="/about" onClick={() => setMenu(true)}>
            about
          </Link>
        </button>
      </div>
    </div>
  );
};

PopUp.propTypes = {
  setMenu: PropTypes.func.isRequired,
};

export default PopUp;
