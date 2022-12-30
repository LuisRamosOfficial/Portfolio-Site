import React, { FC } from 'react';
import styles from '../styles/ProjectSlider/ProjectSlider.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import data from '../../data.json';
import demo from '../../../public/demo-button.png';
import source from '../../../public/source-button.png';

const ProjectSlider = () => {

  const CarouselSettings = {
		infiniteLoop: true,
		width: '50%',
		centerMode : false,
    useKeyboardArrows: true
	};

	return (
		<div className={styles.slider}>
			<h1>My Projects</h1>
			<p>
				Here's a brief showcase of some projects with a Live Demo and the Source
				Code.
			</p>
			<div className={styles.ProjectList}>
				<Carousel {...CarouselSettings}>
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
		</div>
	);
};

export default ProjectSlider;
