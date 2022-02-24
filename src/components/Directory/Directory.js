// import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styles from './Directory.module.scss';
import MenuItem from '../MenuItem/MenuItem';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const Directory = function ({ sections }) {
  return (
    <div className={styles.Directory}>
      {sections.map(({
        id, ...otherSectionProps
      }) => <MenuItem key={id} {...otherSectionProps} />)}
    </div>
  );
};

Directory.propTypes = {
  sections: PropTypes.array,
};

Directory.defaultProps = {
  sections: [],
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
