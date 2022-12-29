import React, { FC, useRef, useState, useEffect } from 'react';
import styles from '../styles/Title/Title.module.css';

const Title: FC = () => {
	const [intersecting, setIntersecting] = useState<boolean>(false);

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				setIntersecting(true);
			} else {
				setIntersecting(false);
			}
		});
	});

	const textRef = useRef(null);
	useEffect(() => {
		if (textRef.current) {
			observer.observe(textRef.current);
		}
	}, [textRef]);

	return (
		<div className={styles.Title}>
			<p className={intersecting ? styles.show : styles.hidden} ref={textRef}>
				Luís Viegas
			</p>
		</div>
	);
};

export default Title;
