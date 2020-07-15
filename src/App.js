import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';
import developImg from './assets/develop-arrow.png';

import Navigation from './components/Navigation/Navigation';
import Accueil from './components/pages/accueil/Accueil';
import Competences from './components/pages/competences/Competences'
import Projets from './components/pages/projets/Projets';
import Contact from './components/pages/contact/Contact';

function App() {
  const [pageAnchor, setPageAnchor] = useState({ origin: 'accueil', destination: 'accueil' });

  return (
    <>
      <Navigation pageAnchor={pageAnchor} />
      <ReactFullpage
        licenseKey={'DB6FE5D8-6A044159-A60DB1D0-81FF64DE'}
        scrollOverflow={true}
        anchors={['accueil', 'competences', 'projets', 'contact']}
        onLeave={(origin, destination, direction) => setPageAnchor({ origin: origin.anchor, destination: destination.anchor })}

        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section" id="section-1">
                <Accueil />
                <img src={developImg} id="more" onClick={() => fullpageApi.moveSectionDown()}></img>
              </div>
              <div className="section" id="section-2">
                <Competences pageAnchor={pageAnchor}/>
              </div>
              <div className="section" id="section-3">
                <Projets pageAnchor={pageAnchor} />
              </div>
              <div className="section" id="section-4">
                <Contact pageAnchor={pageAnchor} />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}

export default App;
