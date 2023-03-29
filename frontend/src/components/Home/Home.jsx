import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import Reservations from '../Reservations/Reservations';
// import Team from '../Team/Team';
// import News from '../News/News';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import 'react-toastify/dist/ReactToastify.css';
import './styles.scss';
import Loader from '../Loader/Loader';
const Catalogue = React.lazy(() => import('../Catalogue/Catalogue'));

const Home = () => {
  return (
    <>
      <main>
        <div className="home">
          <div className="home-slider">
            <div className="wrapper">
              <Swiper
                // install Swiper modules
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

                <SwiperSlide>
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
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </main>
      <Suspense fallback={<Loader />}>
        <Catalogue />
      </Suspense>
      {/* <Team />  */}
      <Reservations />
      {/* <News />  */}
    </>
  );
};

export default Home;
