import styles from './assets/styles/App.module.scss';
import Scene3D from './assets/Components/Scene3D';
import Title from './assets/Components/Title';
import { useRef} from 'react';
import React from 'react';
import AboutMe from './assets/Components/AboutMe';

function App() {

  const AppRef= useRef(null);

  return (

    <div ref={AppRef} className={styles.App}>
      <Scene3D scroll={AppRef}   /> 
      <Title    />
      <AboutMe  />
    </div>
  )
}

export default App
