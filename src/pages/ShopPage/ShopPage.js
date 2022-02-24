import { Routes, Route } from 'react-router-dom';
import styles from './ShopPage.module.scss';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../CollectionPage/CollectionPage';

const ShopPage = function () {
  return (
    <div className={styles.ShopPage}>
      <Routes>
        <Route index element={<CollectionsOverview />} />
        <Route path=":collectionId" element={<CollectionPage />} />
      </Routes>
    </div>
  );
};

export default ShopPage;
