import PropTypes from 'prop-types';
import styles from './CollectionPreview.module.scss';
import CollectionItem from '../CollectionItem/CollectionItem';

const CollectionPreview = function ({ title, items }) {
  // Careful: the filter and map over items re-run each time CollectionPreview has to re-render.
  // It is not optimal to filter here.
  return (
    <div className={styles.PreviewCollection}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.preview}>
        {
          items
            .filter((item, idx) => idx < 4)
            .map(({ id, ...otherItemProps }) => (
              <CollectionItem key={id} id={id} {...otherItemProps} />
            ))
        }
      </div>
    </div>
  );
};

CollectionPreview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
  })),
};

CollectionPreview.defaultProps = {
  title: 'Untitled',
  items: [],
};

export default CollectionPreview;
