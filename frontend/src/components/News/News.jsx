import './styles.scss';

const News = () => {
  return (
    <div className="news">
      <h1 className="header">Les dernières nouvelles</h1>

      <div className="news-container">
        <div className="news-box">
          <div className="news-image">
            <img src={process.env.REACT_APP_BACKEND_URL + 'news1.png'} alt="News" />
          </div>

          <div className="news-content">
            <h3>PROFESSIONNAL LEVEL</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non, explicabo dolore eaque suscipit
              similique voluptatum officia eveniet repellat.
            </p>
            <a href="/">Plus d'infos</a>
            <img src={process.env.REACT_APP_BACKEND_URL + 'newsBg1.png'} alt="News background" />
          </div>
        </div>

        <div className="news-box">
          <div className="news-image">
            <img src={process.env.REACT_APP_BACKEND_URL + 'news1.png'} alt="News" />
          </div>

          <div className="news-content">
            <h3>FRESH FOOD GUARANTEED</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non, explicabo dolore eaque suscipit
              similique voluptatum officia eveniet repellat.
            </p>
            <a href="/">Plus d'infos</a>
            <img src={process.env.REACT_APP_BACKEND_URL + 'newsBg2.png'} alt="News background" />
          </div>
        </div>

        <div className="news-box">
          <div className="news-image">
            <img src={process.env.REACT_APP_BACKEND_URL + 'news3.png'} alt="News" />
          </div>

          <div className="news-content">
            <h3>THE MENU IS PLENTYFUL</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non, explicabo dolore eaque suscipit
              similique voluptatum officia eveniet repellat.
            </p>
            <a href="/">Plus d'infos</a>
            <img src={process.env.REACT_APP_BACKEND_URL + 'newsBg3.png'} alt="News background" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
