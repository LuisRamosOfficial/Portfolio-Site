import react from 'react';
import { useRef } from 'react';
import AboutMe from './assets/Components/AboutMe';
import ProjectSlider from './assets/Components/ProjectSlider';
import Scene3D from './assets/Components/Scene3D';
import Title from './assets/Components/Title';
import styles from './assets/styles/App.module.css';

const App = () => {

  const AppRef= useRef(null);

    return (
      <div ref={AppRef} className={styles.App}>
        <Scene3D scroll={AppRef} />
        <Title />
        <AboutMe />
        <ProjectSlider />
      </div>
    )
}

export default App
