import React, { useState, useEffect } from 'react';
import Dot from '../Dot';
import { Dots } from './Styled';

const Pagination = ({ sectionsRefArr }) => {
  const [activeOffsetRange, setActiveOffsetRange] = useState();
  const [activeIndex, setActiveIndex] = useState();
  useEffect(() => {
    if (!sectionsRefArr) return null;

    if (activeOffsetRange) {
      window.addEventListener('scroll', checkIsInActiveRange);
      return;
    }

    getActiveIndexOffsetRange();
  }, [activeOffsetRange]);

  /** get active range of every section */
  const getActiveIndexOffsetRange = () => {
    const range = sectionsRefArr?.map((_, index) => {
      const start = sectionsRefArr[index].getBoundingClientRect().top;
      const end = sectionsRefArr[index].getBoundingClientRect().bottom;

      return { start, end };
    });
    setActiveIndex(0);
    setActiveOffsetRange(range);
  };

  /**  check is Active */
  const checkIsInActiveRange = () => {
    /**TODO: active timing need to be defined more clear as below
     *
     * long page: page fill full fullScreen to active
     * short page: entire page in a screen to active
     * ...and so on
     */

    if (!activeOffsetRange) return;
    const scrollOffset = window.pageYOffset;
    const activeIndex = activeOffsetRange?.findIndex((range, index) => {
      const { start, end } = range;
      return scrollOffset >= start && scrollOffset < end;
    });

    setActiveIndex(activeIndex);
  };

  return (
    <Dots>
      {sectionsRefArr?.map((sectionRef, index) => {
        console.log(activeIndex);
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
