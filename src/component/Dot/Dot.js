import React from 'react';
import { Dot } from './Styled';
import classnames from 'classnames';

const DotComp = ({ sectionRef, isActive }) => {
  /** 小豆豆被點擊 */
  const handleClickDotForActive = () => {
    sectionRef.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Dot
      onClick={handleClickDotForActive}
      className={classnames({
        active: isActive,
      })}
    />
  );
};

export default DotComp;
