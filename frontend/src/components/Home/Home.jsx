// import { useState, useEffect } from 'react';
import Catalogue from '../Catalogue/Catalogue';
import Inscription from '../SingUp/SignUp';
// import Team from '../Team/Team';
import Reservations from '../Reservations/Reservations';
// import News from '../News/News';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { ToastContainer, toast } from 'react-toastify';
import 'swiper/swiper-bundle.css';
import 'react-toastify/dist/ReactToastify.css';
import './styles.scss';

const Home = () => {
  // const [currentUser, setCurrentUser] = useState(null);
  // const [showWelcomeMsg, setShowWelcomeMsg] = useState(false);

  // useEffect(() => {
  //   const auth = getAuth();
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     setCurrentUser(user);
  //   });

  //   return unsubscribe;
  // });

  // // Show notification
  // if (!showWelcomeMsg) {
  //   setShowWelcomeMsg(true);

  //   toast.warn(`Bienvenue!`, {
  //     className: 'notification',
  //     position: 'top-right',
  //     autoClose: 2500,
  //     hideProgressBar: true,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: false,
  //     progress: undefined,
  //     theme: 'colored',
  //     icon: false,
  //     bodyClassName: 'toastify-color-welcome',
  //   });
  // }

  return (
    <>
      <main>
        <div className="home">
          {/* {currentUser && <ToastContainer />} */}

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
                      <a href="/" className="btn">
                        Commandez en ligne
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="slide slide-2">
                    <div className="content">
                      <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Slideshow" />

                      <h3>Goûtez l'Orient</h3>
                      <h1>Ô Zaytoon</h1>
                      <a href="/" className="btn">
                        Commandez en ligne
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="slide slide-3">
                    <div className="content">
                      <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Slideshow" />

                      <h3>Goûtez l'Orient</h3>
                      <h1>Ô Zaytoon</h1>
                      <a href="/" className="btn">
                        Commandez en ligne
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </main>
      <Catalogue />
      <Inscription />
      {/* <Team />  */}
      <Reservations />
      {/* <News />  */}
    </>
  );
};

export default Home;
