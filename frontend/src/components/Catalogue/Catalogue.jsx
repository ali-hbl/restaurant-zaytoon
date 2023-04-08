import React, { Fragment } from 'react';
import useFetch from '../../hooks/useFetch';
import Divider from '../Divider/Divider';
import Loader from '../Loader/Loader';
import './styles.scss';

const Catalogue = () => {
  const { data, isLoading } = useFetch('catalogue');
  const catalogueItems = data.results;

  const categories = ['entrees', 'plats', 'desserts', 'boissons'];

  const handleClick = () => {
    console.log('Passer la commande'); //TODO
  };

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
                  <div className="box" key={item.id}>
                    <div className="box-image">
                      <img src={process.env.REACT_APP_BACKEND_URL + item.image_url} alt={item.title} />
                    </div>
                    <div className="catalogue-content">
                      <h3>{item.name}</h3>
                      <p className="item-price">{item.price} €</p>
                      <p className="item-description">{item.description}</p>

                      <a href="/" className="btn" onClick={handleClick}>
                        Commander
                      </a>
                    </div>
                  </div>
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

      <>
        {isLoading && <Loader />}
        {!isLoading && renderCatalogue()}
      </>
    </div>
  );
};

export default Catalogue;
