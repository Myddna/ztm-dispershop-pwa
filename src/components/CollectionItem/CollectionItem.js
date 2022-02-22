import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addItem as addItemAction } from '../../redux/cart/cart.actions';

import CustomButton from '../CustomButton/CustomButton';
import styles from './CollectionItem.module.scss';

const CollectionItem = function ({ item, addItem }) {
  const { name, imageUrl, price } = item;
  return (
    <div className={styles.CollectionItem}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className={styles.footer}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>
          {price}
          €
        </span>
      </div>
      <div className={styles.cartButtonWrapper}>
        <CustomButton inverted onClick={() => addItem(item)}>Add to cart</CustomButton>
      </div>
    </div>
  );
};

CollectionItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
  }),

  addItem: PropTypes.func,
};

CollectionItem.defaultProps = {
  item: null,
  addItem: null,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemAction(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
