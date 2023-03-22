import news1 from '../../backend/images/news1.jpg';
import news2 from '../../backend/images/news2.jpg';
import news3 from '../../backend/images/news3.jpg';
import newsBg1 from '../../backend/images/newsBg1.png';
import newsBg2 from '../../backend/images/newsBg2.png';
import newsBg3 from '../../backend/images/newsBg3.png';
import './styles.scss';

const News = () => {
  return (
    <div className="news">
      <h1 className="header">Les dernières nouvelles</h1>

      <div className="news-container">
        <div className="news-box">
          <div className="news-image">
            <img src={news1} alt="News" />
          </div>

          <div className="news-content">
            <h3>PROFESSIONNAL LEVEL</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non, explicabo dolore eaque suscipit
              similique voluptatum officia eveniet repellat.
            </p>
            <a href="/">Plus d'infos</a>
            <img src={newsBg1} alt="News background" />
          </div>
        </div>

        <div className="news-box">
          <div className="news-image">
            <img src={news2} alt="News" />
          </div>

          <div className="news-content">
            <h3>FRESH FOOD GUARANTEED</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non, explicabo dolore eaque suscipit
              similique voluptatum officia eveniet repellat.
            </p>
            <a href="/">Plus d'infos</a>
            <img src={newsBg2} alt="News background" />
          </div>
        </div>

        <div className="news-box">
          <div className="news-image">
            <img src={news3} alt="News" />
          </div>

          <div className="news-content">
            <h3>THE MENU IS PLENTYFUL</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non, explicabo dolore eaque suscipit
              similique voluptatum officia eveniet repellat.
            </p>
            <a href="/">Plus d'infos</a>
            <img src={newsBg3} alt="News background" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
