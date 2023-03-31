import React from 'react';
import { FaAngleUp } from 'react-icons/fa';
import './styles.scss';

const ScrollToTop = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      <FaAngleUp className="btn-top" onClick={goToTop} />
    </>
  );
};

export default ScrollToTop;
