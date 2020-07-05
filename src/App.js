import React, { useRef } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import { useInView } from 'react-intersection-observer';


function App() {
  const [test, inView, entry] = useInView({
    threshold: 0.12,
  });
  const test2 = useRef();
  
  function scrolldiv(){
    test2.current.scrollIntoView({block: "start", behavior: "smooth", inline: "nearest"});
  }

  return (
    <>
      <Navigation inView={inView} scrolldiv={scrolldiv} />
      <div id="test" ref={test}></div>
      <div id="test2" ref={test2}></div>
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
