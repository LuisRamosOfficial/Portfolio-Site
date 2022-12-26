import { useState } from 'react'
import reactLogo from './assets/react.svg'
import styles from './assets/styles/App.module.scss';
import Scene3D_styles from './assets/styles/App.module.scss';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Scene3D     />
    </div>
  )
}

export default App

const Scene3D = () => {


      return (<canvas className={Scene3D_styles.canvas}>

      </canvas>);
    }
  