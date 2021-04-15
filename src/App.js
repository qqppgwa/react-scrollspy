import { useRef, useEffect, useState } from 'react';
import './App.css';
import Pagination from './component/Pagination';
import { Section } from './AppStyled';

function App() {
  const refSec1 = useRef();
  const refSec2 = useRef();
  const refSec3 = useRef();
  const [sectionsRefArr, setSectionRefArr] = useState();

  useEffect(() => {
    if (refSec1.current) {
      setSectionRefArr([refSec1.current, refSec2.current, refSec3.current]);
    }
  }, []);

  return (
    <div className="App">
      <Section ref={refSec1} height="100vh" background="burlywood" />
      <Section ref={refSec2} height="2300px" background="aquamarine" />
      <Section ref={refSec3} height="3380px" background="coral" />
      {sectionsRefArr && <Pagination sectionsRefArr={sectionsRefArr} />}
    </div>
  );
}

export default App;
