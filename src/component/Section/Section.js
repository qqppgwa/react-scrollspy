import React, {
  forwardRef,
  useRef,
  useEffect,
  useImperativeHandle,
} from 'react';
import { Section } from './Styled';

const SectionComp = forwardRef(({ height, background, secId }, ref) => {
  // useImperativeHandle(ref,()=>);
  // if (!ref) return null;
  const secRef = useRef();
  // ref.current[secId] = secRef;
  return <Section height={height} background={background} />;
});

export default SectionComp;
