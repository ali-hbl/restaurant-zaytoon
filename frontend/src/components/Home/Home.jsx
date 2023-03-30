import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Loader from '../Loader/Loader';
import Reservations from '../Reservations/Reservations';
// import Team from '../Team/Team';
// import News from '../News/News';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import 'react-toastify/dist/ReactToastify.css';
import './styles.scss';

const Home = () => {
  const { data, isLoading } = useFetch('catalogue/top-three');
  const topThreePlates = data.results;

  const handleClick = () => {
    console.log('Passer la commande'); //TODO
  };

  const renderTopThree = () => {
    return (
      <div className="box-container">
        {topThreePlates.map((item) => (
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
    );
  };

  return (
    <>
      <main>
        <div className="home-slider">
          <div className="wrapper">
            <Swiper
              // initialize Swiper modules
              modules={[Autoplay]}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 5500,
                disableOnInteraction: false,
              }}
              loop={true}
              className="swiper"
            >
              <SwiperSlide>
                <div className="slide slide-1">
                  <div className="content">
                    <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Slideshow" />

                    <h3>Goûtez l'Orient</h3>
                    <h1>Ô Zaytoon</h1>
                    <Link to="/catalogue">Commandez en ligne</Link>
                  </div>
                </div>
              </SwiperSlide>

              {/* <SwiperSlide>
                <div className="slide slide-2">
                  <div className="content">
                    <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Slideshow" />

                    <h3>Goûtez l'Orient</h3>
                    <h1>Ô Zaytoon</h1>
                    <Link to="/catalogue">Commandez en ligne</Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="slide slide-3">
                  <div className="content">
                    <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Slideshow" />

                    <h3>Goûtez l'Orient</h3>
                    <h1>Ô Zaytoon</h1>
                    <Link to="/catalogue">Commandez en ligne</Link>
                  </div>
                </div>
              </SwiperSlide> */}
            </Swiper>
          </div>
        </div>

        <h1 className="header">Notre choix</h1>
        <>
          {isLoading && <Loader />}
          {!isLoading && renderTopThree()}
        </>

        <div className="catalogue-button">
          <Link to="/catalogue" onClick={handleClick}>
            Consultez le catalogue
          </Link>
        </div>
      </main>
      <Reservations />
      {/* <Team />  */}
      {/* <News />  */}
    </>
  );
};

export default Home;
