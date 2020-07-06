import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import { useInView } from 'react-intersection-observer';
import ReactFullpage from '@fullpage/react-fullpage';

function App() {
  const [test, inView, entry] = useInView({
    threshold: 0.6,
  });
  const [pageAnchor, setPageAnchor] = useState({origin: 'accueil', destination: 'accueil'});
  // console.log(pageAnchor);
  
  return (
    <>
      <Navigation inView={inView} entry={entry} pageAnchor={pageAnchor}/>
      <ReactFullpage
        //fullpage options
        scrollBar={true}
        anchors={['accueil', 'competences', 'projets', 'contact']}
        onLeave={(origin, destination, direction) => setPageAnchor({origin: origin.anchor, destination: destination.anchor}) }

        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section" id="test" ref={test}>
                <p>Section 1 (welcome to fullpage.js)</p>
              </div>
              <div className="section" id="test2">

              </div>
              <div className="section" id="test3">
                <p>projets</p>
              </div>
              <div className="section" id="test4">
                <p>contact</p>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />

      {/* 
      navbar transparent, avant la transition avec un autre component
      ici tous les components:
      header avec nom prenom presentation - github linkedin
      soit projets 1 par 1 soit tous les projets dans une grille
    */}
    </>
  );
}

export default App;
