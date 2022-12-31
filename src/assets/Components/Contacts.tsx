import React, {FC, useState, useRef, useEffect} from 'react'
import styles from '../styles/Contacts/Contacts.module.css';
import github_icon from '../../github.png';
interface Curve {
	flip: boolean;
}

const Contacts: FC = () => {

const [titleIntersecting, setTitleIntersecting] = useState<boolean>(false);
const [img1Intersecting, setImg1Intersecting] = useState<boolean>(false);
const [img2Intersecting, setImg2Intersecting] = useState<boolean>(false);
const [img3Intersecting, setImg3Intersecting] = useState<boolean>(false);
const [img4Intersecting, setImg4Intersecting] = useState<boolean>(false);

const observerTitle = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTitleIntersecting(true)
    }
    else {
      setTitleIntersecting(false)
    }
		
	});
});
const observerImg1 = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
    if (entry.isIntersecting) {
			setImg1Intersecting(true);
		} else {
			setImg1Intersecting(false);
		}
		
	});
});
const observerImg2 = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			setImg2Intersecting(true);
		} else {
			setImg2Intersecting(false);
		}
	});
});
const observerImg3 = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			setImg3Intersecting(true);
		} else {
			setImg3Intersecting(false);
		}
	});
});
const observerImg4 = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			setImg4Intersecting(true);
		} else {
			setImg4Intersecting(false);
		}
	});
});
  const TitleRef = useRef(null)
  const Img1Ref = useRef(null)
  const Img2Ref = useRef(null)
  const Img3Ref = useRef(null)
  const Img4Ref = useRef(null)


  useEffect(() => {
		if (TitleRef.current) {
			observerTitle.observe(TitleRef.current);
		}
		if (Img1Ref.current) {
			observerImg1.observe(Img1Ref.current);
		}
		if (Img2Ref.current) {
			observerImg2.observe(Img2Ref.current);
		}
		if (Img3Ref.current) {
			observerImg3.observe(Img3Ref.current);
		}
		if (Img4Ref.current) {
			observerImg4.observe(Img4Ref.current);
		}
	}, [TitleRef, Img1Ref, Img2Ref, Img4Ref, Img3Ref]);

  return (
		<div className={styles.Container}>
			<h1 ref={TitleRef}>Contacts: </h1>
			<div className={styles.ContactsList}>
				<img
					className={titleIntersecting ? styles.Icon : styles.hidden}
					ref={Img1Ref}
					style={{ '--order': 1.5 } as React.CSSProperties}
					src={'https://cdn-icons-png.flaticon.com/512/3670/3670151.png'}
				/>
				<img
					className={titleIntersecting ? styles.Icon : styles.hidden}
					ref={Img2Ref}
					style={{ '--order': 1.25 } as React.CSSProperties}
					src={'https://cdn-icons-png.flaticon.com/512/3670/3670157.png'}
				/>
				<img
					className={titleIntersecting ? styles.Icon : styles.hidden}
					ref={Img3Ref}
					style={{ '--order': 1 } as React.CSSProperties}
					src={github_icon}
				/>
				<div ref={Img4Ref} data-order={4} className={styles.EmailContainer}>
					<img src={'https://cdn-icons-png.flaticon.com/512/732/732200.png'} />
					<p>: luisviegasr2@gmail.com</p>
				</div>
			</div>
		</div>
	);
}


export default Contacts