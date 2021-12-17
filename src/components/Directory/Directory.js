// import { useState } from 'react';
import MenuItem from '../MenuItem/MenuItem';
// import PropTypes from 'prop-types';
import styles from './Directory.module.scss';
import sections from '../../data/directory';

const Directory = function () {
  // const [products, setProducts] = useState(sections);
  const products = sections;
  return (
    <div className={styles.Directory}>
      {products.map(({
        id, ...otherSectionProps
      }) => {
        console.log(otherSectionProps);
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </div>
  );
};

Directory.propTypes = {};

Directory.defaultProps = {};

export default Directory;
