import React, { FC } from 'react'
import styles from '../styles/AboutMe.module.scss';
interface Curve {
    flip: boolean
}

const AboutMe: FC = () => {
  return (
		<>
			<Curve flip={false} />
			<div className={styles.main}></div>
			<Curve flip={true} />
		</>
	);
}



const Curve: FC<Curve> = ({flip}) => {
      return (
				<div
					className={flip ? `${styles.spacer} ${styles.flip}` : styles.spacer}
				></div>
			);
    }
    export default AboutMe