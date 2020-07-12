import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import { useInView } from 'react-intersection-observer';
import ReactFullpage from '@fullpage/react-fullpage';
import developImg from './assets/develop-arrow.png';

import Navigation from './components/Navigation/Navigation';
import Accueil from './components/pages/accueil/Accueil';
import Competences from './components/pages/competences/Competences'
import Projets from './components/pages/projets/Projets';
import Contact from './components/pages/contact/Contact';

function App() {
  const [test, inView, entry] = useInView({
    threshold: 0.6,
  });
  const [pageAnchor, setPageAnchor] = useState({ origin: 'accueil', destination: 'accueil' });

  return (
    <>
      <Navigation inView={inView} entry={entry} pageAnchor={pageAnchor} />
      <ReactFullpage
        // navigation={true}
        // scrollBar={true}
        scrollOverflow={true}
        anchors={['accueil', 'competences', 'projets', 'contact']}
        onLeave={(origin, destination, direction) => setPageAnchor({ origin: origin.anchor, destination: destination.anchor })}

        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section" id="section-1" ref={test}>
                <Accueil />
                <img src={developImg} id="more" onClick={() => fullpageApi.moveSectionDown()}></img>
              </div>
              <div className="section" id="section-2">
                <Competences />
              </div>
              <div className="section" id="section-3">
                <Projets />
              </div>
              <div className="section" id="section-4">
                <Contact />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}

export default App;
