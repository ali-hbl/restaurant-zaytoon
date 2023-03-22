import './styles.scss';

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menu-header">La Carte</h1>

      <div className="menu-container">
        <div className="item">
          <div className="item-name">
            <h2>Plats</h2>
          </div>

          <div className="item-menu">
            <h3>Super Délicieux</h3>
            <span className="dots"></span>
            <h3>26€</h3>

            <ul>
              <li>Champignons</li>
              <li>Boeuf</li>
              <li>Sauces</li>
              <li>Epinards</li>
            </ul>
          </div>
        </div>

        <div className="item">
          <div className="item-name">
            <h2>Soupes</h2>
          </div>

          <div className="item-menu">
            <h3>Super Délicieux</h3>
            <span className="dots"></span>
            <h3>26€</h3>

            <ul>
              <li>Champignons</li>
              <li>Boeuf</li>
              <li>Sauces</li>
              <li>Epinards</li>
            </ul>
          </div>
        </div>

        <div className="item">
          <div className="item-name">
            <h2>Boissons</h2>
          </div>

          <div className="item-menu">
            <h3>Super Délicieux</h3>
            <span className="dots"></span>
            <h3>26€</h3>

            <ul>
              <li>Champignons</li>
              <li>Boeuf</li>
              <li>Sauces</li>
              <li>Epinards</li>
            </ul>
          </div>
        </div>

        <div className="item">
          <div className="item-name">
            <h2>Desserts</h2>
          </div>

          <div className="item-menu">
            <h3>Super Délicieux</h3>
            <span className="dots"></span>
            <h3>26€</h3>

            <ul>
              <li>Champignons</li>
              <li>Boeuf</li>
              <li>Sauces</li>
              <li>Epinards</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
