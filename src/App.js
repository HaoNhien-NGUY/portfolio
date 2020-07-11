import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import { useInView } from 'react-intersection-observer';
import ReactFullpage from '@fullpage/react-fullpage';
import Accueil from './components/pages/accueil/Accueil';
import Projets from './components/pages/projets/Projets';
import developImg from './assets/develop-arrow.png';

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
                <p>au cours de mon annee, j'ai eu l'occasion d'experimente avec un grand nombre de technologies et j'ai beaucoup appris en peu de temps, mais j'ai surtout appris a apprendre, jai pris confiance en mes capacite d'apprentissage ...</p>
              </div>
              <div className="section" id="section-3">
                <Projets />
              </div>
              <div className="section" id="section-4">
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}

export default App;
