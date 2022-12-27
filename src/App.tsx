import { useEffect, useState } from 'react'
import styles from './assets/styles/App.module.scss';
import Scene3D from './assets/Components/Scene3D';
import Title from './assets/Components/Title';
import { useRef} from 'react';


function App() {

  const AppRef= useRef(null);

  

  return (
    <div ref={AppRef} className={styles.App}>
      <Scene3D scroll={AppRef}   /> 
      <Title   />
    </div>
  )
}

export default App
