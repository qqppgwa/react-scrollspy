import React, { useState } from 'react';
import { Dot } from './Styled';
import classnames from 'classnames';

/**
 * 1. dot active as page scroll
 * 2. click dot to scroll
 */
const DotComp = ({ sectionRef, index }) => {
  const { y } = sectionRef.getBoundingClientRect();
  const [isActive, setIsActive] = useState();

  /** 小豆豆被點擊 */
  const handleClickDotForActive = () => {
    sectionRef.scrollIntoView({ behavior: 'smooth' });
  };

  /** 畫面滾動 */
  const handleScrollSection = () => {
    if (index === 1) {
      console.log(window.pageYOffset);
      console.log(y);
    }
    if (window.pageYOffset === y) {
      console.log('kkkkk');
      setIsActive(true);
    }
  };

  return (
    <Dot
      onClick={handleClickDotForActive}
      // onScroll={handleScrollSection}
      className={classnames({
        active: isActive,
      })}
    ></Dot>
  );
};

export default DotComp;
