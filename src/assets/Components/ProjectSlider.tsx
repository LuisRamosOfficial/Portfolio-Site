import React, { FC, useState, useEffect, useRef } from 'react';
import styles from '../styles/ProjectSlider/ProjectSlider.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import data from '../../data.json';
import demo from '../../demo-button.png';
import source from '../../source-button.png';
import nextArrow from '../../next-arrow.png';
import prevArrow from '../../prev-arrow.png';

interface UpdateSliderProps {
	function: () => void;
}

let isMobile = true;

const ProjectSlider: FC = () => {
	const [width, setWidth] = useState(window.innerWidth);

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

	const SliderRef = useRef(null);
	useEffect(() => {
		if (SliderRef.current) {
			observer.observe(SliderRef.current);
		}
	}, [SliderRef]);

	const handleWindowSizeChange = () => {
		setWidth(window.innerWidth);
		isMobile = window.innerWidth < 1200 ? true : false;
	};

	useEffect(() => {
		window.addEventListener('resize', handleWindowSizeChange);
		handleWindowSizeChange();
	}, []);

	const indexes = data.Projects.map((element, index) => {
		return index;
	});

	const [currentSlider, setCurrentSlider] = useState<number>(0);

	const CarouselSettings = {
		infiniteLoop: true,
		centerMode: false,
		useKeyboardArrows: false,
		showStatus: false,
		swipeable: false,
		emulateTouch: false,
		showArrows: false,
		showIndicators: false,
		selectedItem: currentSlider,
	};

	const UpdateSlider = (to: string) => {
		if (to == 'next') {
			if (currentSlider == data.Projects.length - 1) {
				setCurrentSlider(0);
			} else {
				setCurrentSlider(currentSlider + 1);
			}
		} else {
			if (currentSlider == 0) {
				setCurrentSlider(data.Projects.length - 1);
			} else {
				setCurrentSlider(currentSlider - 1);
			}
		}

		console.log(indexes);
	};

	return (
			<div className={styles.slider} ref={SliderRef}>
				<h1>My Projects</h1>
				<p>
					Here's a brief showcase of some projects with a Live Demo and the
					Source Code.
				</p>
				<h5>
					**Swipe, use the keyboard arrows or the displayed ones to switch
					slides**
				</h5>
				<div className={styles.Controls}>
					<img onClick={() => UpdateSlider('prev')} src={prevArrow} />
					<img onClick={() => UpdateSlider('next')} src={nextArrow} />
				</div>
				<div className={styles.ProjectList}>
					<Carousel
						{...CarouselSettings}
						showThumbs={false}
						width={isMobile ? '90%' : '60%'}
					>
						{data.Projects.map((e, index) => (
							<div key={index} className={styles.Project}>
								<div
									className={styles.background}
									style={{ backgroundImage: `url(${e.ScreenShot})` }}
								></div>
								<div className={styles.titlebar}>
									<h2>{e.Name}</h2>
								</div>
								<div className={styles.footbar}>
									<h4>{e.Description}</h4>
									<div className={styles.buttons}>
										<button
											onClick={() => {
												window.open(e.Demo, '_blank');
											}}
											className={styles.DemoButton}
										>
											<img alt="Live Demo" src={demo} />
										</button>
										<button
											onClick={() => {
												window.open(e.Github, '_blank');
											}}
											className={styles.SourceButton}
										>
											<img alt="Source Code" src={source} />
										</button>
									</div>
								</div>
							</div>
						))}
					</Carousel>
				</div>
				<div className={styles.ControlDots}>
					{indexes.map((element) => (
						<>
							{currentSlider == element ? (
								<p>&#9679;</p>
							) : (
								<p onClick={() => setCurrentSlider(element)}>&#9675;</p>
							)}
						</>
					))}
				</div>
			</div>

	);
};


export default ProjectSlider;
