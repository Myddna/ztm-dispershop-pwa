import PropTypes from 'prop-types';
import styles from './FormInput.module.scss';

const FormInput = function ({ handleChange, label, ...otherProps }) {
  const classes = [styles.formInputLabel];
  if (otherProps?.value?.length) {
    classes.push(styles.shrink);
  }
  return (
    <div className={styles.group}>
      <input className={styles.formInput} onChange={handleChange} {...otherProps} />
      {
        label ? (
          <label className={classes.reduce((prev, current) => `${prev} ${current}`)}>
            {label}
          </label>
        ) : null
      }
    </div>
  );
};

FormInput.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string,
};

FormInput.defaultProps = {
  handleChange: null,
  label: null,
};

export default FormInput;
