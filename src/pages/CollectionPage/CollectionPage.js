import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import styles from './CollectionPage.module.scss';

const CollectionPage = function () {
  const { collectionId } = useParams();
  // Since the params info is no longer on the component props,
  // instead of using mapStateToProps we are going to use useSelector
  // More info on useSelector: https://react-redux.js.org/api/hooks
  const collection = useSelector(selectCollection(collectionId));
  console.log(collectionId, collection);

  return (
    <div className={styles.CollectionPage}>
      CollectionPage Component
    </div>
  );
};

CollectionPage.propTypes = {};

CollectionPage.defaultProps = {};

export default CollectionPage;
