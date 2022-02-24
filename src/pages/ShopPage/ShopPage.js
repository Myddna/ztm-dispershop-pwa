import styles from './ShopPage.module.scss';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';

const ShopPage = function () {
  return (
    <div className={styles.ShopPage}>
      <CollectionsOverview />
    </div>
  );
};

export default ShopPage;
