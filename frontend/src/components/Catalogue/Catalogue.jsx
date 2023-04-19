import React, { Fragment } from 'react';
import CatalogueItem from '../CatalogueItem/CatalogueItem';
import useFetch from '../../hooks/useFetch';
import Divider from '../Divider/Divider';
import Loader from '../Loader/Loader';
import './styles.scss';

const Catalogue = () => {
  const { data, isLoading } = useFetch('catalogue');
  const catalogueItems = data.results;
  const categories = ['entrees', 'plats', 'desserts', 'boissons'];

  const renderCatalogue = () => {
    return (
      <>
        {categories.map((category, i) => (
          <Fragment key={`category-${i}`}>
            <h2 className="sub-header">{category}</h2>
            <Divider />
            <div className="box-container">
              {catalogueItems
                .filter((item) => item.category === category)
                .map((item) => (
                  <CatalogueItem key={item.id} item={item} />
                ))}
            </div>
          </Fragment>
        ))}
      </>
    );
  };

  return (
    <div className="catalogue">
      <h1 className="header">Notre catalogue</h1>

      {isLoading && <Loader />}
      {!isLoading && renderCatalogue()}
    </div>
  );
};

export default Catalogue;
