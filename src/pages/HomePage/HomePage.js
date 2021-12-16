// import PropTypes from 'prop-types';
import Directory from '../../components/Directory/Directory';
import styles from './HomePage.module.scss';

const HomePage = function () {
  return (
    <div className={styles.HomePage} data-testid="HomePage">
      <Directory />
    </div>
  );
};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
