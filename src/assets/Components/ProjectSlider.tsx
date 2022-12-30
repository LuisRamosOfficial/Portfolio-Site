import React, { FC, useState, useEffect } from 'react';
import styles from '../styles/ProjectSlider/ProjectSlider.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import data from '../../data.json';
import demo from '../../demo-button.png';
import source from '../../source-button.png';
import nextArrow from '../../next-arrow.png';
import prevArrow from '../../prev-arrow.png';

interface UpdateSliderProps {
	function :() => void

}

const ProjectSlider: FC = () => {

	const [Widescreen, setWidescreen] = useState<boolean>(true);
	const indexes = data.Projects.map((element, index) => {return index})

	useEffect(() => {
		const width = window.innerWidth;
		console.log(width);
		if (width < 1000) {
			setWidescreen(false);
		}
	}, []);

	const [currentSlider, setCurrentSlider] = useState<number>(0)

  const CarouselSettings = {
		infiniteLoop: true,
		centerMode: false,
		useKeyboardArrows: true,
		showStatus: false,
		swipeable: true,
		emulateTouch: true,
		showArrows: false,
		showIndicators: false,
		selectedItem: currentSlider,
	};

	const UpdateSlider = (to: string) => {
		if (to == 'next') {
			if (currentSlider == data.Projects.length - 1) {
				setCurrentSlider(0)
			}
			else {
				setCurrentSlider(currentSlider + 1)
			}
		}
		else {
			if (currentSlider == 0) {
				setCurrentSlider(data.Projects.length - 1);
			} else {
				setCurrentSlider(currentSlider - 1);
			}
		}

		console.log(indexes)
	}

	return (
		<div className={styles.slider}>
			<h1>My Projects</h1>
			<p>
				Here's a brief showcase of some projects with a Live Demo and the Source
				Code.
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
				<Carousel {...CarouselSettings} showThumbs={false} width={Widescreen ? '60%' : '90%'}>
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
				
			</div>
		</div>
	);
};

export default ProjectSlider;
