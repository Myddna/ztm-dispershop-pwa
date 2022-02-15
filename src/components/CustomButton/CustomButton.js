import React from 'react';
import PropTypes from 'prop-types';
import styles from './CustomButton.module.scss';

const CustomButton = function (
  {
    children, type, isGoogleSignIn, ...otherProps
  },
) {
  const buttonStyles = [styles.CustomButton];
  if (isGoogleSignIn) {
    buttonStyles.push(styles.googleSignIn);
  }
  return (
    <button className={buttonStyles.join(' ')} type={type} {...otherProps}>
      { children }
    </button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  isGoogleSignIn: PropTypes.bool,
};

CustomButton.defaultProps = {
  children: null,
  type: 'button',
  isGoogleSignIn: false,
};

export default CustomButton;
