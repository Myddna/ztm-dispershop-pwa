import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import styles from './CollectionsOverview.module.scss';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import { selectCollections } from '../../redux/shop/shop.selectors';

const CollectionsOverview = function ({ collections }) {
  return (
    <div className={styles.CollectionsOverview}>
      {collections
        .map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
  );
};

CollectionsOverview.propTypes = {
  collections: PropTypes.array,
};

CollectionsOverview.defaultProps = {
  collections: [],
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
