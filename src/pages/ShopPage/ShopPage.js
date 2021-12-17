import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import styles from './ShopPage.module.scss';
import shopData from '../../data/shop.data';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

const ShopPage = function () {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    console.log('useEffect');
    setCollections(shopData);
  }, [shopData]);

  console.log(collections);
  return (
    <div className={styles.ShopPage}>
      {collections
        .map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
  );
};

ShopPage.propTypes = {};

ShopPage.defaultProps = {};

export default ShopPage;
