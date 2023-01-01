import React, { FC, useState, useRef, useEffect } from 'react';
import styles from '../styles/Contacts/Contacts.module.css';
import github_icon from '../../github.png';
interface Curve {
	flip: boolean;
}

const Contacts: FC = () => {
	const [titleIntersecting, setTitleIntersecting] = useState<boolean>(false);
	const [imagesIntersecting, setImagesIntersecting] = useState<boolean>(false);

	const observerTitle = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				setTitleIntersecting(true);
			} else {
				setTitleIntersecting(false);
			}
		});
	});
	const observerImages = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				setImagesIntersecting(true);
			} else {
				setImagesIntersecting(false);
			}
		});
	});


	const TitleRef = useRef(null);
	const ImagesRef = useRef(null);

	useEffect(() => {
		if (TitleRef.current) {
			observerTitle.observe(TitleRef.current);
		}
		if (ImagesRef.current) {
			observerImages.observe(ImagesRef.current);
		}
	}, [TitleRef, ImagesRef]);

	return (
		<div ref={TitleRef} className={styles.Container}>
			<h1 className={titleIntersecting ? styles.show : styles.hidden}>
				Contacts:{' '}
			</h1>
			<div ref={ImagesRef} className={styles.ContactsList}>
				<img
					className={imagesIntersecting ? styles.Icon : styles.hidden}
					style={{ '--order': 1.5 } as React.CSSProperties}
					onClick={() => window.open('https://twitter.com/l_ramos14', '_blank')}
					src={'https://cdn-icons-png.flaticon.com/512/3670/3670151.png'}
				/>
				<img
					onClick={() =>
						window.open(
							'https://discordapp.com/users/239761741356072961',
							'_blank'
						)
					}
					className={imagesIntersecting ? styles.Icon : styles.hidden}
					style={{ '--order': 1.25 } as React.CSSProperties}
					src={'https://cdn-icons-png.flaticon.com/512/3670/3670157.png'}
				/>
				<img
					onClick={() =>
						window.open('https://github.com/LuisRamosOfficial', '_blank')
					}
					className={imagesIntersecting ? styles.Icon : styles.hidden}
					style={{ '--order': 1 } as React.CSSProperties}
					src={github_icon}
				/>
				<div
					style={{ '--order': 2 } as React.CSSProperties}
					className={imagesIntersecting ? styles.EmailContainer : styles.hidden}
				>
					<img src={'https://cdn-icons-png.flaticon.com/512/732/732200.png'} />
					<p>: luisviegasr2@gmail.com</p>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
