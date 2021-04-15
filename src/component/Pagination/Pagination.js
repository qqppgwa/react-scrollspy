import React, { useState, useEffect } from 'react';
import Dot from '../Dot';
import { Dots } from './Styled';

const Pagination = ({ sectionsRefArr }) => {
  const [activeOffsetRange, setActiveOffsetRange] = useState();
  const [activeIndex, setActiveIndex] = useState();
  useEffect(() => {
    if (!sectionsRefArr) return null;
    // console.log(activeOffsetRange);
    if (activeOffsetRange) {
      window.addEventListener('scroll', checkIsInActiveRange);
      return;
    }

    getActiveIndexOffsetRange();
  }, [activeOffsetRange]);

  /** get active range of every section */
  const getActiveIndexOffsetRange = () => {
    const range = sectionsRefArr?.map((section, index) => {
      const start = sectionsRefArr[index].getBoundingClientRect().top;
      const end = sectionsRefArr[index].getBoundingClientRect().bottom;

      return { start, end };
    });
    console.log('1232e432');
    setActiveOffsetRange(range);
  };

  /**  check is Active */
  const checkIsInActiveRange = () => {
    /** big: page can full fullScreen to active
     * small: not,page all in this screen to active
     */

    console.log('gg');
    console.log(activeOffsetRange);
    if (!activeOffsetRange) return;
    const scrollOffset = window.pageYOffset;
    console.log(activeOffsetRange);
    const activeIndex = activeOffsetRange?.findIndex((range, index) => {
      const { start, end } = range;
      return scrollOffset >= start && scrollOffset < end;
    });
    console.log(activeIndex);
  };

  return (
    <Dots>
      {sectionsRefArr?.map((sectionRef, index) => {
        return (
          <Dot
            key={index}
            sectionRef={sectionRef}
            index={index}
            isActive={activeIndex === index}
          />
        );
      })}
    </Dots>
  );
};

export default Pagination;
